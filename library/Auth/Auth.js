const bcrypt = require('bcrypt');
const User = require('../../models/User/User');

module.exports =  {
    checkAuthState: (req) => {
        if (!req.session.user) {
            return false;
        } else {
            return true;
        }
    },
    signup: (req, cb) => 
    {
        let user = new User(req.body);
        cb(user);
        bcrypt.hash(user.password, 10, (err, hash) => {
            if (err)
            {
                throw err;
            } else 
            {
                user.password = hash;
                user.save()
                    .then((data) => {
                        req.user = data;
                        req.session.user = data;
                        cb(user);
                    })
                    .catch((err) => {
                        throw err;
                    });
            }
        });
    },
    login: (req, res, cb) => 
    {
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;
            if (!user) {
                res.status(400).json({
                    user: {},
                    message: 'EMAIL/PASSWORD INCORRECT'
                });
            } else {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (err) throw err;
                    if (match) {
                        req.session.user = user;
                        cb(req.session.user);
                    } else {
                        res.status(400).json({
                            user: {},
                            message: 'EMAIL/PASSWORD INCORRECT'
                        });
                    }
                })
            }
        })
    },
    logout: (req, cb) => {
        if (req.session) {
            req.session.destroy((error) => {
                if (error) throw error;
                cb();
            });
        }
    }
}
const express_1 = require("express");
const Auth = require("../../library/Auth/Auth");
const router = express_1.Router();

router.route('/signup').post((req, res) => {
    Auth.signup(req, (user) => {
        res.status(200).json({
            user: user,
            message: 'USER CREATED'
        });
    });
});

router.route('/login').post((req, res) => {
    Auth.login(req, res, (user) => {
        res.status(200).json({
            user: user,
            message: 'USER LOGGED IN'
        });
    })
});

router.route('/logout').post((req, res) => {
    Auth.logout(req, () => {
        res.status(200).json({
            user: '',
            message: 'USER LOGGED OUT'
        });
    });
});

module.exports = router;
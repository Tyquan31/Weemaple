const express_1 = require("express");
const User = require("../../models/User/User");
const Crud = require("../../library/Crud/Crud");
const Auth = require("../../library/Auth/Auth");
const router = express_1.Router();

// API Router for USERS

router.route('/')
    .get((req, res) => {
        Crud.getData(User, (users) => {
            res.status(200).json({
                users: users,
                message: 'GET Success'
            })
        });
    })
    .post((req, res) => {
        Auth.signup(req, (users) => {
            res.status(200).json(users);
        });
    });
router.route('/:userId')
    .get((req, res) => {
        Crud.getSingleData(User, req, (user) => {
            res.status(200).json({
                user: user,
                message: 'GET SINGLE Success'
            })
        });
    })
    .put((req, res) => {
        Crud.putData(User, req, (user) => {
            res.status(200).json(res.status(200).json({
                user: user,
                message: 'PUT Success'
            }));
        })
    })
    .delete((req, res) => {
        Crud.deleteData(User, req, () => {
            res.status(200).json({
                user: '',
                message: 'DELETE Success'
            })
        })
        res.status(200).send(`DELETE requested for id ${req.params.userId}`);
    });

module.exports = router;
//# sourceMappingURL=UserRoute.js.map
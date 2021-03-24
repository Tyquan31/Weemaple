const express = require("express");
const router = express.Router();
const Crud = require('../../library/Crud/Crud');
const Auth = require('../../library/Auth/Auth');
const Project = require('../../models/Project/Project');

// API Router for Projects

router.route('/')
    .get((req, res) => {
        Crud.getData(Project, (projects) => {
            res.status(200).json({
                projects: projects,
                message: 'PUT Success'
            });
        });
    })
    .post((req, res) => {
        if (Auth.checkAuthState(req) == true) {
            Crud.postData(Project, req, (project) => {
                res.status(200).json({
                    project: project,
                    message: 'POST Success'
                });
            })
        } else {
            res.status(200).json({
                project: {},
                message: 'POST Failure, must be logged in'
            });
        }
        
    });

router.route('/:projectId')
    .get((req, res) => {
        Crud.getSingleData(Project, req, (project) => {
            res.status(200).json({
                project: project,
                message: 'GET Single Success'
            });
        });
        
    })
    .put((req, res) => {
        Crud.putData(Project, req, (project) => {
            res.status(200).json({
                project: project,
                message: 'PUT Success'
            });
        });
    })
    .delete((req, res) => {
        Crud.deleteData(Project, req, () => {
            res.status(200).json({
                project: '',
                message: 'Project deleted successfully'
            });
        });
    });

module.exports = router;
//# sourceMappingURL=ProjectRoute.js.map
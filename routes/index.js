const express = require('express');
const router = express.Router();
const controllerProject = require('../controllers/controllersProject');

module.exports = () =>{
    router.get('/',controllerProject.login);

    return router;
}
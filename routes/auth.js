const express = require('express');
const {body} = require('express-validator');
const router = express.Router()
const User = require('../models/user');
const authController = require('../controllers/auth');

router.post(
    '/signup',
    [
        body('firstName').trim().not().isEmpty(),
        body('email')
            .isEmail()
            .withMessage('Please enter a vaild email')
            .custom(async (email) => {
                const user = await User.find(email);
                if(user[0].length > 0){
                    return promise.reject('Email already exists')
                }
            })
            .normalizeEmail(),  
        // body('password').trim().length({ 
        //     min : 7
        // })
    ], 
    authController.signup 
);

router.post(
    '/login',
    authController.login
);

router.get(
    '/form/save-details',
    authController.fetchAll
);

router.delete(
    '/form/delete-details/:id',
    authController.deletePost
);

module.exports = router;
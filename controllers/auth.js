const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.signup =async (req, res,next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()) return

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password =req.body.password;
    const middleName = req.body.middleName;
    const address = req.body.address;
    const city = req.body.city;
    const country = req.body.country;
    const phoneNumber = req.body.phoneNumber;
    const pincode = req.body.pincode;
    const state =req.body.state;
    const height= req.body.height;
    const weight = req.body.weight;

    try {

        const hashedPassword = await bcrypt.hash(password, 12)
        const userDetails ={
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : hashedPassword,
            middleName : middleName,
            address : address,
            city : city,
            country : country,
            phoneNumber : phoneNumber,
            pincode: pincode,
            state : state,
            height : height,
            weight : weight


        }

        const token = jwt.sign(
            {
                
            },
            "secretfortoken",
            {
                expiresIn: "2h",
            }
        );

        const result =await User.save(userDetails);
        res.status(201).json({
            message: 'user Registered',
        })

    }catch (err){
        if(!err.statusCode){
            err.statusCode = 500;

        }
        next(err)

    }
};

exports.login = async (req, res, next) =>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const middleName = req.body.middleName;
    const address = req.body.address;
    const city = req.body.city;
    const country = req.body.country;
    const phoneNumber = req.body.phoneNumber;
    const pincode = req.body.pincode;
    const state = req.body.state;
    const height = req.body.height;
    const weight = req.body.weight;

    try{
        const user = await User.find(email);

        if (user[0].length !==1){
            const error = new error('User Not Found... SignUp instead');
            error.statusCode = 401;
            throw error;
        }


        const storedUser = user[0][0];
        const isEqual = await bcrypt.compare(password, storedUser.password);

        if (!isEqual){
            const error = new error(" Entered Password is Incorrect");
            error.statusCode = 401;
            throw error;

        }

        const token = jwt.sign(
            {
                email: storedUser.email,
                id : storedUser.id

            },
            'secretfortoken',
            {
                expiresIn: '2h'
            }
        );
        res.status(200).json(
            {
                token : token,
                email: storedUser.email,
                password : storedUser.password
            }
        )

    } catch (error){
        if(!error.statusCode){
            err.statusCode =500;
        }
        next(err);
    }


};

exports.fetchAll = async (req, res,next)=>{
    try{
        const [allPosts] = await User.fetchAll();
        res.status(200).json(allPosts);
    }catch (err){
        const token = jwt.sign(
            {
                email: storedUser.email,
                userId : storedUser.id,

            },
            'secretfortoken',
            {
                expiresIn: '2h'
            }
        );
        res.status(200).json(
            {
                token : token,
                userId : id,
                firstname: storedUser.firstname,
            }
        )
        if(!error.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await User.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
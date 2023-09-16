const userModel = require('../models/userModel');

// JWT TOKEN
exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res);
    res.status(statusCode).json({
        success: true,
        token,
    });
};

// REGISTER
exports.registerController = async (req, res, next) => {
    try {
        const {username, email, password} = req.body;
        // Existing User
        const existingEmail = await userModel.findOne({email});
        if(existingEmail){
            return next(new errorResponse("Email is already Registered",500));
        }
        const user = await userModel.create({username, email, password});
        sendToken(user, 201, res);
    } catch (error) {
       console.log(error)
       next(error) 
    }
} ;


// LOGIN
exports.loginController = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        // validation
        if(!email || !password){
            return next(new errorResponse('please provide email or password'));
        }
        const user = await userModel.findOne({email});
        if(!user){
            return next(new errorResponse('Invalid Credential', 401));
        }
        const isMatch = await userModel.matchpassword(password);
        if(!isMatch){
            return next(new errorResponse('Invalid Credential', 401));
        }
        // res
        sendToken(user, 200, res);
    } catch (error) {
        console.log(error);
        next(error);
    }
} ;


// LOGOUT
exports.logoutController = async (req, res) => {
    res.clearCookie('refreshToken')
    return res.status(200).json({
        success : true,
        message : "Logout Success"
    })
} ;
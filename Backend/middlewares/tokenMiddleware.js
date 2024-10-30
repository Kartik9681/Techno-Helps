const jwt = require('jsonwebtoken');
const User = require('../models/user');
const tokenMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({msg: "No access to token"});
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token is ", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
        console.log(isVerified);

        const userData = await User.findOne({email: isVerified.email}).select({password: 0,});
        req.data = userData;
        req.token = token;
        req.userID = userData._id;
        next();
    } catch (error) {
        return res.status(401).json({msg: "Invalid token"});
    }
}

module.exports = tokenMiddleware;
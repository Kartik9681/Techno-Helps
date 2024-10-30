const adminMiddleware = async (req, res, next) => {
    try {
        console.log(req.data);
        if(!req.data.isAdmin){
            return res.status(403).json({msg: 'Admin access denied'});
        }
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = adminMiddleware;
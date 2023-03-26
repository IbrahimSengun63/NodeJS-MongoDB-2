
const checkSignIn = function (req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
};




module.exports = {
    checkSignIn
    
}
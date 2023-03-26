
const passport = require('passport');
const User = require('../../DB/user_db').User;
const bcrypt = require('bcrypt');
require('./passport_local')(passport)



const showLoginPage = (req, res, next) => {
    res.render('login', { layout: 'layout/login_layout'});
};




const login = (req, res, next) => {




    passport.authenticate('local', {

        successRedirect: '/home',
        failureRedirect: '/login',
        
    })(req, res, next);


};










module.exports = {
    showLoginPage,
    login
}
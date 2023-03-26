const User = require('../../DB/user_db').User;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');



const showHomePage = async function (req, res, next) {
    res.render('home', { user: req.user, layout: 'layout/home_layout' });
};





module.exports = {
    showHomePage
}
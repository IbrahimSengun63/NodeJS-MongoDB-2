const Wallet = require('../../DB/user_db').Wallet;
const User = require('../../DB/user_db').User;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');



const showEncoderPage = (req, res, next) => {
    res.render('encoder', {user:req.user, layout: 'layout/encoder_layout' });
};





module.exports = {
    showEncoderPage
}
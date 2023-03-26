const Wallet = require('../DB/user_db').Wallet;
const User = require('../DB/user_db').User;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');


const showWalletPage = (req, res, next) => {

    res.render('wallet', { user: req.user, layout: 'layout/wallet_layout' });
};

const createWAllet = async function (req, res, next) {

    const values = {
        userid: req.user._id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        socialnu: req.body.socialnu,
        phonenu: req.body.phonenu,
        creditcardnu: req.body.creditcardnu,
        cvcnu: req.body.cvcnu,
        address: req.body.address
    }

    try {
        const wallet = new Wallet(values);
        await wallet.save();
        res.redirect('/encoder');
    } catch (error) {
        console.log(error);
    }



}



module.exports = {
    showWalletPage,
    createWAllet
}
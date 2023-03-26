const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const WalletSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId

    },
    firstname: {
        type: String,
        trim: true,
        lowercase: true
    }, 
    lastname: {
        type: String,
        trim: true,
        lowercase: true
    },
    socialnu: {
        type: String,
        trim: true,
        lowercase: true
    },
    phonenu: {
        type: String,
        trim: true,
        lowercase: true
    },
    creditcardnu: {
        type: String,
        trim: true,
        lowercase: true
    },
    cvcnu: {
        type: String,
        trim: true,
        lowercase: true
    },
    address: {
        type: String,
        trim: true,
        lowercase: true
    }
}, { collection: 'wallets', timestamps: true });



module.exports = { WalletSchema };






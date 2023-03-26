const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, { collection: 'users', timestamps: true });



module.exports = { UserSchema };






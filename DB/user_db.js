
const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_CONNECTION_STRING + 'onecash_users', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})


const User = conn.model('User', require('./user_schema').UserSchema)
const Wallet = conn.model('Wallet', require('./wallet_schema').WalletSchema)

module.exports = {
    User,
    Wallet
}
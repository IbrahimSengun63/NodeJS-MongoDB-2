const dotenv = require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const passport = require('passport');

require('./DB/user_db');
const MongoDBStore = require('connect-mongodb-session')(session);
const onecashUsersSessionStore = new MongoDBStore({
    uri: process.env.MONGODB_CONNECTION_STRING+'onecash_users',
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Design'));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    store: onecashUsersSessionStore
}));


app.use(passport.initialize());
app.use(passport.session());

const loginRouter = require('./Authentication/Login/login_router');
const registerRouter = require('./Authentication/register/register_router');
const homeRouter = require('./Public/home/home_router');
const encoderRouter = require('./Generator/encoder/encoder_router');
const walletRouter = require('./Wallet/wallet_router');


app.use('/',loginRouter);
app.use('/',registerRouter);

app.use('/',homeRouter);
app.use('/',encoderRouter);

app.use('/',walletRouter);

app.listen(process.env.PORT, () => {
    console.log("Runnig!!!");
});
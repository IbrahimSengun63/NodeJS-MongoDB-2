const router = require('express').Router();
const walletController = require('./wallet_controller');
const walletMiddleware = require('./wallet_middleware')

router.get('/wallet',walletMiddleware.checkSignIn,walletController.showWalletPage);
router.post('/wallet',walletMiddleware.checkSignIn,walletController.createWAllet);




module.exports = router;
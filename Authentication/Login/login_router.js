const router = require('express').Router();
const loginController = require('./login_controller');


router.get('/login',loginController.showLoginPage);
router.post('/login',loginController.login);




module.exports = router;
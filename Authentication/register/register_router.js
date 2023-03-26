const router = require('express').Router();
const registerController = require('./register_controller');

router.get('/register',registerController.showRegisterPage);
router.post('/register', registerController.register);





module.exports = router;
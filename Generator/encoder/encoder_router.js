const router = require('express').Router();
const encoderController = require('./encoder_controller');
const encoderMiddleware = require('./encoder_middleware');

router.get('/encoder',encoderMiddleware.checkSignIn,encoderController.showEncoderPage);





module.exports = router;
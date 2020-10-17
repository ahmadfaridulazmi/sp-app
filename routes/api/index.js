var express = require('express');
var router = express.Router();
const { controllerCallback } = require('../../app/middleware/express');
const paymentController = require('../../app/controllers/payment');

/* GET home page. */
router.get('/health', function(req, res) {
    res.send({ health: 'ok' });
});

router.get('/payments', controllerCallback(paymentController.all));
router.post('/payments', controllerCallback(paymentController.create));

module.exports = router;

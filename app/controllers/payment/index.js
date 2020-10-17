const logService = require('../../services/payment_log'),
    paymentSchema = require('../../schema/payment'),
    { DEFAULT_ITEMS_PER_PAGE } = require('../../../config'),
    { validator } = require('../../schema/base');

exports.all = async(req, res) => {
    await validator(paymentSchema.all, req.query);
    const { page = {}, filter = {} } = req.query;
    const { number = 1, size = DEFAULT_ITEMS_PER_PAGE } = page;
    const { order_id } = filter;
    let logs = await logService.all({
        number, size, order_id
    });
    res.status(200);
    return logs.results;
};

exports.create = async(req, res) => {
    await validator(paymentSchema.create, req.body);
    const mock_results = Math.random() >= 0.5; //mock payment results
    const result = mock_results ? 'confirmed' : 'declined';
    const { order_id, user_id, user_credentials = {} } = req.body;
    const { card_number = '' } = user_credentials;
    user_credentials['card_number'] = `****${card_number.slice(-4)}`;
    const attr = {
        order_id,
        user_id,
        user_credentials,
        status: result
    };
    await logService.create(attr);
    res.status(201);
    return { result: result } ;
};

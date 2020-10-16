const PaymentLog = require('../../models/payment_logs')

exports.create = (attr = {}) => {
    return PaymentLog.query().insert(attr);
}

exports.all = ({ number, size, order_id } = {}) => {
    const results = PaymentLog.query().whereNull('deleted_at')
    order_id && results.where('order_id', order_id)
    results.orderBy('id', 'desc');
    results.page(Number(number) - 1, size);
    return results;
}

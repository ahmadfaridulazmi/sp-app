const Model = require('./base');

class PaymentLogs extends Model {
    static tableName = 'payment_logs';

    static getTableName() {
        return this.tableName;
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }

}

module.exports = PaymentLogs;

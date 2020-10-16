
exports.up = function(knex) {
    return knex.schema.createTable('payment_logs', function (table) {
        table.increments('id').primary();
        table.integer('user_id').notNullable().index();
        table.string('user_credentials').notNullable();
        table.text('order_id').index().notNullable();
        table.string('status');
        table.timestamp('created_at');
        table.timestamp('deleted_at');
        table.timestamp('updated_at');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('payment_logs');
};

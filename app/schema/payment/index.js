const joi = require('joi'),
    { MAX_ITEMS_PER_PAGE } = require('../../../config');

exports.create = {
    schema: () => {
        return joi.object().keys({
            user_id: joi.number().required(),
            order_id: joi.number().required(),
            user_credentials: joi.object().required(),
        });
    }
};

exports.all = {
    schema: () => {
        return joi.object().keys({
            page: joi.object().keys({
                number: joi.number().positive().optional(),
                size: joi.number().positive().max(MAX_ITEMS_PER_PAGE).optional()
            }),
            filter: joi.object().keys({
                order_id: joi.number().positive().optional()
            })
        });
    }
}

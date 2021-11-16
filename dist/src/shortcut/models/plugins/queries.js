"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHelpers = void 0;
const lodash_1 = require("lodash");
const queryHelpers = function (schema) {
    schema.query.paginate = async function (page = 1, limit = 10) {
        page = lodash_1.isInteger(+page) ? +page : 1;
        limit = lodash_1.isInteger(+limit) ? +limit : 10;
        const query = lodash_1.clone(this);
        const count = await query.count();
        const payload = {
            pagination: {
                total: count,
                currentPage: page,
                perPage: limit,
                totalPages: Math.ceil(count / limit),
            },
            data: await this.skip((page - 1) * limit).limit(limit),
        };
        return payload;
    };
};
exports.queryHelpers = queryHelpers;
//# sourceMappingURL=queries.js.map
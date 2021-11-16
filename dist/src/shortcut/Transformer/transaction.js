"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTransformer = void 0;
const lodash_1 = require("lodash");
const moment = require("moment");
const core_1 = require("../../../libs/core/src");
class TransactionTransformer extends core_1.Transformer {
    constructor() {
        super(...arguments);
        this.availableIncludes = [];
        this.defaultIncludes = [];
    }
    async transform(transaction) {
        return {
            id: transaction._id,
            title: lodash_1.get(`${transaction.meta.event}.purposeText`, 'Amount Credited'),
            isCredit: !!transaction.isCredit,
            amount: `+${+transaction.amount} Aii's`,
            formattedDate: moment(transaction.createdAt)
                .format('DD MMM YY')
                .toString(),
        };
    }
}
exports.TransactionTransformer = TransactionTransformer;
//# sourceMappingURL=transaction.js.map
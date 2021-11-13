"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectModel = void 0;
const core_1 = require("../exceptions/core");
const BaseModel_1 = require("./BaseModel");
function InjectModel(model) {
    if (!(model.prototype instanceof BaseModel_1.BaseModel)) {
        throw new core_1.DbRepositoryException(`Instance of ${BaseModel_1.BaseModel.name} expected, ${typeof model} passed!`);
    }
    return function (target, key) {
        Object.assign(target, {
            [key]: model,
        });
    };
}
exports.InjectModel = InjectModel;
//# sourceMappingURL=Helpers.js.map
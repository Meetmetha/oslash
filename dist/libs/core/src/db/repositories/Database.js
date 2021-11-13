"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseRepository = void 0;
const lodash_1 = require("lodash");
const exceptions_1 = require("../../exceptions");
class DatabaseRepository {
    constructor() {
        this.model = null;
    }
    async all(inputs) {
        inputs = inputs || {};
        const query = this.query();
        if (inputs['select']) {
            query.select(inputs['select']);
        }
        return await query;
    }
    async firstWhere(inputs, error = true) {
        const q = this.query();
        q.findOne(lodash_1.omit(inputs, ['select']));
        if (inputs['select']) {
            q.select(inputs['select']);
        }
        const model = await q.exec();
        if (error && lodash_1.isEmpty(model)) {
            this.raiseError();
        }
        return model;
    }
    async getWhere(inputs, error) {
        const q = this.query();
        q.find(inputs);
        if (error && lodash_1.isEmpty(q)) {
            this.raiseError();
        }
        return await q.exec();
    }
    async create(inputs) {
        return await this.model.create(inputs);
    }
    async createOrUpdate(conditions, values) {
        const model = await this.firstWhere(conditions, false);
        if (!model) {
            return await this.create(Object.assign(Object.assign({}, conditions), values));
        }
        await this.updateWhere(conditions, values);
        return await this.firstWhere(conditions, false);
    }
    async firstOrNew(conditions, values) {
        const model = await this.firstWhere(conditions, false);
        if (model) {
            return model;
        }
        return await this.create(Object.assign(Object.assign({}, conditions), values));
    }
    async update(model, setValues) {
        return await this.model.findByIdAndUpdate(model._id, setValues);
    }
    async updateWhere(where, setValues) {
        return await this.model.updateMany(where, setValues);
    }
    async count(params) {
        return await this.query().countDocuments(params);
    }
    async distinct(key, conditions = {}) {
        return await this.query().distinct(key, conditions);
    }
    async delete(model) {
        return await this.model.deleteMany({ _id: model._id });
    }
    async deleteWhere(params) {
        return await this.model.deleteMany(params);
    }
    async refresh(model) {
        return await this.query().findOne({ _id: model._id });
    }
    async stream(conditions, callback) {
        const cursor = this.query()
            .find(conditions)
            .cursor();
        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
            callback(doc);
        }
    }
    async aggregate(inputs) {
        return await this.model.aggregate(inputs);
    }
    raiseError() {
        throw new exceptions_1.ModelNotFoundException(this.model.collection.collectionName + ' not found');
    }
    query() {
        return this.model.find();
    }
}
exports.DatabaseRepository = DatabaseRepository;
//# sourceMappingURL=Database.js.map
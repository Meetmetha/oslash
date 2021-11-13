import { isEmpty, omit } from 'lodash';
import { ModelNotFoundException } from '@libs/core/exceptions';

export class DatabaseRepository {
  protected model = null;

  /**
   * Get all rows
   */
  async all(inputs?: Record<string, any>): Promise<any> {
    inputs = inputs || {};
    const query = this.query();

    if (inputs['select']) {
      query.select(inputs['select']);
    }

    return await query;
  }

  /**
   * Get first instance with the matching criterias
   * @param inputs
   * @param error
   */
  async firstWhere(inputs: Record<string, any>, error = true): Promise<any> {
    const q = this.query();

    q.findOne(omit(inputs, ['select']));

    if (inputs['select']) {
      q.select(inputs['select']);
    }

    const model = await q.exec();

    if (error && isEmpty(model)) {
      this.raiseError();
    }

    return model;
  }

  /**
   * Get all instances with the matching criterias
   * @param inputs
   * @param error
   */
  async getWhere(inputs: Record<string, any>, error?: boolean): Promise<any> {
    const q = this.query();

    q.find(inputs);

    if (error && isEmpty(q)) {
      this.raiseError();
    }

    return await q.exec();
  }

  /**
   * Create a new model with given inputs
   * @param inputs
   */
  async create(inputs: Record<string, any>): Promise<any> {
    return await this.model.create(inputs);
  }

  /**
   * Update or Create model with given condition and values
   * @param conditions
   * @param values
   */
  async createOrUpdate(
    conditions: Record<string, any>,
    values: Record<string, any>,
  ): Promise<any> {
    const model = await this.firstWhere(conditions, false);
    if (!model) {
      return await this.create({ ...conditions, ...values });
    }

    await this.updateWhere(conditions, values);
    return await this.firstWhere(conditions, false);
  }

  /**
   * First or Create model with given condition and values
   *
   * @param conditions
   * @param values
   */
  async firstOrNew(
    conditions: Record<string, any>,
    values: Record<string, any>,
  ): Promise<any> {
    const model = await this.firstWhere(conditions, false);
    if (model) {
      return model;
    }

    return await this.create({ ...conditions, ...values });
  }

  /**
   * Update the given model with values
   * @param model
   * @param setValues
   */
  async update(model: any, setValues: Record<string, any>): Promise<any> {
    return await this.model.findByIdAndUpdate(model._id, setValues);
  }

  /**
   * Update all models where condition is matched
   * @param column
   * @param value
   * @param setValues
   */
  async updateWhere(
    where: Record<string, any>,
    setValues: Record<string, any>,
  ): Promise<any> {
    return await this.model.updateMany(where, setValues);
  }

  /**
   * Get count of rows matching a criteria
   * @param params
   */
  async count(params) {
    return await this.query().countDocuments(params);
  }

  /**
   * Get distinct values from a collection for a criteria
   * @param model
   */
  async distinct(key: string, conditions = {}) {
    return await this.query().distinct(key, conditions);
  }

  /**
   * Delete a model
   *
   * @param model
   */
  async delete(model): Promise<boolean> {
    return await this.model.deleteMany({ _id: model._id });
  }

  /**
   * Delete documents where query is matched.
   *
   * @param params
   */
  async deleteWhere(params): Promise<boolean> {
    return await this.model.deleteMany(params);
  }

  /**
   * Refresh a model
   *
   * @param model
   */
  async refresh(model): Promise<any> {
    return await this.query().findOne({ _id: model._id });
  }

  /**
   * Stream a model satisfying certain conditions
   *
   * @param conditions
   * @param callback
   */
  async stream(
    conditions: Record<string, any>,
    callback: Function,
  ): Promise<any> {
    const cursor = this.query()
      .find(conditions)
      .cursor();

    for (
      let doc = await cursor.next();
      doc != null;
      doc = await cursor.next()
    ) {
      callback(doc);
    }
  }

  /**
   * Perform aggregate query on a model.
   *
   * @param inputs
   */
  async aggregate(inputs: Array<Record<string, any>>): Promise<any> {
    return await this.model.aggregate(inputs);
  }

  /**
   * Throws model not found exception.
   *
   * @throws ModelNotFoundException
   */
  raiseError(): void {
    throw new ModelNotFoundException(
      this.model.collection.collectionName + ' not found',
    );
  }

  /**
   * Returns new Query Builder Instance
   */
  query() {
    return this.model.find();
  }
}

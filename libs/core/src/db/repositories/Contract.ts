export interface RepositoryContract {
  model: any;

  /**
   * Get all rows
   */
  all(inputs?: Record<string, any>): any;

  /**
   * Get first instance with the matching criterias
   * @param inputs
   * @param error
   */
  firstWhere(inputs: Record<string, any>, error?: boolean): any;

  /**
   * Get all instances with the matching criterias
   * @param inputs
   * @param error
   */
  getWhere(inputs: Record<string, any>, error?: boolean): any;

  /**
   * Create a new model with given inputs
   * @param inputs
   */
  create(inputs: Record<string, any>): any;

  /**
   * Update or Create model with given condition and values
   * @param conditions
   * @param values
   */
  createOrUpdate(
    conditions: Record<string, any>,
    values: Record<string, any>,
  ): Promise<any>;

  /**
   * First or Create model with given condition and values
   *
   * @param conditions
   * @param values
   */
  firstOrNew(
    conditions: Record<string, any>,
    values: Record<string, any>,
  ): Promise<any>;

  /**
   * Update the given model with values
   * @param model
   * @param setValues
   */
  update(model: any, setValues: Record<string, any>): any;

  /**
   * Update all models where condition is matched
   * @param column
   * @param value
   * @param setValues
   */
  updateWhere(where: Record<string, any>, setValues: Record<string, any>): any;

  /**
   * Get count of rows matching a criteria
   * @param params
   */
  count(params: Record<string, any>): Promise<number>;

  /**
   * Refresh a model
   *
   * @param model
   */
  refresh(model: any): any;

  /**
   * Delete a model
   *
   * @param model
   */
  delete(model: any): Promise<boolean>;

  /**
   * Delete documents where query is matched.
   *
   * @param params
   */
  deleteWhere(params: any): Promise<boolean>;

  /**
   * Stream a model satisfying certain conditions
   *
   * @param conditions
   * @param callback
   */
  stream(conditions: Record<string, any>, callback: Function): Promise<any>;

  /**
   * Perform aggregate query on a model.
   *
   * @param inputs
   */
  aggregate(inputs: Array<Record<string, any>>): Promise<any>;

  /**
   * Get distinct values from a collection for a criteria
   * @param model
   */
  distinct(model: any): Promise<any>;

  /**
   * Throws model not found exception.
   *
   * @throws ModelNotFoundException
   */
  raiseError(): void;

  /**
   * Returns new Query Builder Instance
   */
  query(): any;
}

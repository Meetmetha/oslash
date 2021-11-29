export const plugin = function(schema:any) {
  schema.method('rel', async function(this:typeof schema, name: string, force = false) {
    if (this[name] && !force) {
      this[name];
    }
    await this.populate(name).execPopulate();
    return this[name];
  });
};

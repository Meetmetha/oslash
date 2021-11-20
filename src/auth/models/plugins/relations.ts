export const plugin = function(schema) {
  schema.method('rel', async function(name: string, force = false) {
    if (this[name] && !force) {
      this[name];
    }
    await this.populate(name).execPopulate();
    return this[name];
  });
};

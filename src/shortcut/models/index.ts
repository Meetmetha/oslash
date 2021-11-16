import ShortcutSchema from './shortcut';

const models = [
  { name: 'Shortcut', schema: ShortcutSchema },
];

export const getModels = function(): any {
  return models;
};

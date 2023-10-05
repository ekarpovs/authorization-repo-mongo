/**
 * Load authorization rules from a definition,
 * when a rules management is not implemented.
 * Runs the initRules once only for each (ACl, RBAC) type.
 */

import { ModelType, rulesModel } from './model';

/**
 * Load a authorization definitions into a Db
 * @param type
 * @param data
 */
export const initRules = async (type: ModelType, data: unknown) => {
  const model = rulesModel(type);
  const newRules = new model(data);
  await newRules.save();
};

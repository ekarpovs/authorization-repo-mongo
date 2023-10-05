import { ModelType } from './model';
import { rulesDataSource } from './rules-data-source';
import { initRules } from './init-rules';

export { ModelType };
export const rulesRepository = (type: ModelType = ModelType.ACL) => {
  return rulesDataSource(type);
};
export { initRules };
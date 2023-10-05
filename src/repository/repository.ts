import { ModelType } from './model';
import { rulesDataSource } from './rules-data-source';

export { ModelType };
export const rulesRepository = (type: ModelType = ModelType.ACL) => {
  return rulesDataSource(type);
};

// import { rulesModel } from 'mongoose';
import { ModelType, rulesModel } from './model';

export const rulesDataSource = (type: ModelType) => {
  const getRules = async () => {
    const rulesCollection = rulesModel(type);
    const rules = await rulesCollection.find({});
    return rules;
  };

  return { getRules };
};

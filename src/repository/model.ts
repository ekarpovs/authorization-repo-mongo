import { Schema, model, Model } from 'mongoose';

export type Permission = 'create' | 'read' | 'update' | 'delete';

export enum ModelType {
  ACL = 0,
  RBAC = 1,
}

const ResourceSchema = new Schema(
  {
    resource: String,
    permissions: Array<Permission>,
  },
  { _id: false },
);

const RoleSchemaAcl = new Schema(
  {
    role: String,
    resources: [ResourceSchema],
  },
  { _id: false },
);

const AclSchema = new Schema({
  acl: [RoleSchemaAcl],
});

const RoleSchemaRbac = new Schema(
  {
    role: String,
    permissions: Array<Permission>,
  },
  { _id: false },
);

const RbacSchema = new Schema({
  rbac: [RoleSchemaRbac],
});

const Acl = model('Acl', AclSchema);
const Rbac = model('Rbac', RbacSchema);

export const rulesModel = (
  type: ModelType = ModelType.ACL,
): typeof Model<unknown> => {
  return type === ModelType.ACL ? Acl : Rbac;
};

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Useraccess, User } = initSchema(schema);

export {
  Useraccess,
  User
};
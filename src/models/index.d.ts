import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UseraccessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Useraccess {
  readonly id: string;
  readonly user_id?: string | null;
  readonly login?: string | null;
  readonly failed_attempts?: string | null;
  readonly password_changed_dt?: string | null;
  readonly role?: string | null;
  readonly require_password_change?: string | null;
  readonly password?: string | null;
  readonly login_status?: string | null;
  readonly user_status?: string | null;
  readonly expiry_dt?: string | null;
  readonly password_hint?: string | null;
  readonly logical_delete?: string | null;
  readonly dt_update_last?: string | null;
  readonly received_contract?: string | null;
  readonly event_flg?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Useraccess, UseraccessMetaData>);
  static copyOf(source: Useraccess, mutator: (draft: MutableModel<Useraccess, UseraccessMetaData>) => MutableModel<Useraccess, UseraccessMetaData> | void): Useraccess;
}

export declare class User {
  readonly id: string;
  readonly DateCreated?: number | null;
  readonly Username?: string | null;
  readonly Password?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
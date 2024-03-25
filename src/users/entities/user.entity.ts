export enum UserRoles {
  root = 'root',
  master = 'master',
  admin = 'admin',
  user = 'user',
}

export class User {
  id?: string;
  roles: UserRoles = UserRoles.admin;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  cover_image: string;
  actived_at: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
  deleted_at: Date | null;
}

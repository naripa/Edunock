export class User {
  id: number;
  row_num: number;
  username: string;
  email: string;
  password: string;
  class: string;
  subject: string;
  phoneNumber: string;
  last_login_at: string;
  last_login_ip: string;
  confirmed_at: string;
  blocked_at: string;
  status: number;
  status_label: string;
  created_at: string;
  updated_at: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}

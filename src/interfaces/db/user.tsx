export interface RegisteredUser {
  id: String;
  email: string;
  password: string;
  username: string;
}

export interface NewUser {
  email: string;
  password: string;
  username: string;
}

export interface loginUser {
  email: string;
  password: string;
}

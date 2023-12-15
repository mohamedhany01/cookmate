import { NewUser, loginUser } from '@/src/interfaces/db/user';
import axios from 'axios';

export async function registerNewUser(user: NewUser) {
  const data = {
    username: user.username.trim(),
    email: user.email.trim(),
    password: user.password.trim(),
  };

  const res = await axios.post('/api/user/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}

export async function loginUser(user: loginUser) {
  const data = {
    email: user.email.trim(),
    password: user.password.trim(),
  };

  const res = await axios.post('/api/user/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}

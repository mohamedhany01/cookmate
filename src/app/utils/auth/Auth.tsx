import { NewUser } from '@/src/interfaces/db/user';
import axios from 'axios';

export async function registerNewUser(user: NewUser) {
  const data = {
    username: user.username.trim(),
    email: user.email.trim(),
    password: user.password.trim(),
  };

  console.log(data);
  const res = await axios.post('http://localhost:3000/api/user', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}

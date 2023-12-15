import * as Yup from 'yup';

export const registration = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email formate').required('Required'),
  password: Yup.string().required('Required'),
  cpassword: Yup.string()
    // Check: this field's value either is the same as 'password' field or '' "empty" else 'must match'
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Required'),
});

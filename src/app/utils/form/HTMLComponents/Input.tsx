import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const Input = (props: { [x: string]: any; label: any; name: any }) => {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;

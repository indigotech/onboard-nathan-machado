import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid e-mail format.').required('No e-mail provided.'),
  password: yup
    .string()
    .min(7, 'Password must be 7 chars minimum.')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Password must be at least one character and one digit.')
    .required('No password provided.'),
});

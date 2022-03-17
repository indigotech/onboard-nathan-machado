import { PASSWORD_REGEX } from 'app/constants';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid e-mail format.').required('No e-mail provided.'),
  password: yup
    .string()
    .min(7, 'Password must be 7 chars minimum.')
    .matches(PASSWORD_REGEX, 'Password must be at least one character and one digit.')
    .required('No password provided.'),
});

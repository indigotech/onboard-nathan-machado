import { BR_PHONE_REGEX, PASSWORD_REGEX, USER_ROLE_REGEX } from 'app/constants';
import { isDate } from 'util/types';
import * as yup from 'yup';

const yearsAgoFromToday = (years: number): number => {
  return new Date().getFullYear() - years;
};

export const newUserSchema = yup.object().shape({
  name: yup.string().required('No name provided.'),
  email: yup.string().email('Invalid e-mail format.').required('No e-mail provided.'),
  phone: yup.string().matches(BR_PHONE_REGEX, 'Phone must have only digits.'),
  birthDate: yup
    .string()
    .test(
      'date-test',
      'Age must be over 18.',
      (value) => value != null && parseInt(value?.split('/')[0]) < yearsAgoFromToday(18),
    )
    .required('No date of birth provided.'),
  password: yup
    .string()
    .min(7, 'Password must be 7 chars minimum.')
    .matches(PASSWORD_REGEX, 'Password must be at least one character and one digit.')
    .required('No password provided.'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match.'),
  role: yup.string().matches(USER_ROLE_REGEX, 'Select one role!'),
});

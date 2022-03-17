import { ApolloError, useMutation } from '@apollo/client';
import { NewUserMutation } from 'app/services';
import { Button } from 'atomic/atm.button';
import { Input } from 'atomic/atm.input';
import { Select } from 'atomic/atm.select';
import { AlertMsg } from 'atomic/mol.alert-msg';
import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newUserSchema } from './new-user.validation';

interface NewUserData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  password?: string;
  role: 'admin' | 'user' | '';
}

const userRoles = [
  { value: 'user', name: 'User' },
  { value: 'admin', name: 'Admin' },
];

export function NewUserPage() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState<NewUserData>({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    role: '',
  });
  const [newUserMutation, { loading }] = useMutation(NewUserMutation);

  const handleInputChange = (event: BaseSyntheticEvent) => {
    setFormData((oldValues) => ({ ...oldValues, [event.target.name]: event.target.value }));
  };

  const handleConfirmPassword = (event: BaseSyntheticEvent) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    try {
      setErrorMsg('');
      newUserSchema.validateSync({ confirmPassword, ...formData });

      newUserMutation({
        variables: { data: formData },
        onCompleted: () => {
          navigate('/users');
        },
        onError: (error: ApolloError) => {
          setErrorMsg(error.message);
        },
      });
    } catch (err: any) {
      setErrorMsg(err?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New User</h1>

      <Input
        name='name'
        onChange={(event) => handleInputChange(event)}
        value={formData.name}
        type='text'
        placeholder='Name'
        labelName='Name'
        required
      />

      <Input
        name='email'
        onChange={(event) => handleInputChange(event)}
        value={formData.email}
        type='text'
        placeholder='E-mail'
        labelName='E-mail'
        required
      />

      <Input
        name='phone'
        onChange={(event) => handleInputChange(event)}
        value={formData.phone}
        type='text'
        placeholder='Phone'
        labelName='Phone'
        required
      />

      <Input
        name='birthDate'
        onChange={(event) => handleInputChange(event)}
        value={formData.birthDate}
        type='date'
        placeholder='Birth Date'
        labelName='Birth Date'
        required
      />

      <Input
        name='password'
        onChange={(event) => handleInputChange(event)}
        value={formData.password}
        type='password'
        placeholder='Password'
        labelName='Password'
      />

      <Input
        name='confirmPassword'
        onChange={(event) => handleConfirmPassword(event)}
        value={confirmPassword}
        type='password'
        placeholder='Confirm Password'
        labelName='Confirm Password'
      />

      <Select
        name='role'
        options={userRoles}
        onChange={(event) => handleInputChange(event)}
        value={formData.role}
        placeholder='Select your role'
        labelName='Role'
      />

      {errorMsg && <AlertMsg type='error'>{errorMsg}</AlertMsg>}

      <Button type='submit' isLoading={loading}>
        Create User
      </Button>
    </form>
  );
}

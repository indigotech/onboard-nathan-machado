import { BaseSyntheticEvent, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from 'atomic/atm.button';
import { Input } from 'atomic/atm.input';
import { AlertMsg } from 'atomic/mol.alert-msg';
import { loginSchema } from './login.validation';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'app/hooks/login.hook';
import { PageContainerStyled } from './login.style';
import { Form } from 'atomic/mol.form';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorPath, setErrorPath] = useState('');
  const { login, loading } = useLogin({
    onSuccess: () => {
      navigate('/');
    },
    onError: (graphErr) => {
      setErrorMsg(graphErr.message);
    },
  });

  const navigate = useNavigate();

  const handleSubmit = (event: BaseSyntheticEvent) => {
    try {
      setErrorMsg('');
      setErrorPath('');

      loginSchema.validateSync({ email, password });
      login({ email, password });
    } catch (err: any) {
      setErrorMsg(err?.message);
      setErrorPath(err?.path);
    }

    event.preventDefault();
  };

  return (
    <PageContainerStyled>
      <h1>Bem vindo(a) à Taqtile!</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          name='email'
          onChange={(event) => setEmail(event.target.value)}
          hasError={errorPath == 'email'}
          value={email}
          icon={<FiMail size={20} />}
          type='text'
          placeholder='E-mail'
          required
        />

        <Input
          name='password'
          onChange={(event) => setPassword(event.target.value)}
          hasError={errorPath == 'password'}
          value={password}
          icon={<FiLock size={20} />}
          type='password'
          placeholder='Password'
          required
        />

        {errorMsg && <AlertMsg type='error'>{errorMsg}</AlertMsg>}

        <Button type='submit' isLoading={loading}>
          Sign in
        </Button>
      </Form>
    </PageContainerStyled>
  );
}

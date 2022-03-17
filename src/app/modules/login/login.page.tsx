import { BaseSyntheticEvent, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from 'atomic/atm.button';
import { Input } from 'atomic/atm.input';
import { AlertMsg } from 'atomic/mol.alert-msg';
import { loginSchema } from './login.validation';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'app/hooks/login.hook';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
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
      loginSchema.validateSync({ email, password });
      login({ email, password });
    } catch (err: any) {
      setErrorMsg(err?.message);
    }

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bem vindo(a) à Taqtile!</h1>

      <Input
        name='email'
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        icon={<FiMail size={20} />}
        type='text'
        placeholder='E-mail'
        required
      />

      <Input
        name='password'
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        icon={<FiLock size={20} />}
        type='password'
        placeholder='Password'
        required
      />

      {errorMsg && <AlertMsg type='error'>{errorMsg}</AlertMsg>}

      <Button type='submit' isLoading={loading}>
        Login
      </Button>
    </form>
  );
}

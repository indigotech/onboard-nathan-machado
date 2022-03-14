import { BaseSyntheticEvent, useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from 'atomic/atm.button';
import { Input } from 'atomic/atm.input';
import { AlertMsg } from 'atomic/mol.alert-msg';
import { loginSchema } from './login-validations';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'app/hooks/login.hook';

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { login, loading } = useLogin({
    onSuccess: ({ login }) => {
      localStorage.setItem('auth_token', login.token);
      navigate('/');
    }, 
    onError: ((graphErr) => {
      setErrorMsg(graphErr.message);
    })
  });

  const navigate = useNavigate()

  const getIsLoading = () => {
    return isLoading || loading
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    setIsLoading(true)
    loginSchema
      .validate({ email, password })
      .then(() => {
        setErrorMsg("");
        login({ email, password });
      })
      .catch((err) => {
        setErrorMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    event.preventDefault()
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

      {errorMsg && <AlertMsg type='error' >{errorMsg}</AlertMsg>}

      <Button type="submit" isLoading={getIsLoading()}>
        Login
      </Button>
    </form>
  );
};

import { useState } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../atm.button';
import { Input } from '../atm.input';

export function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true)
    // some api request here...
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Bem vindo(a) à Taqtile!</h1>

        <Input icon={FiMail} type='text' placeholder='E-mail' required />
        <Input icon={FiLock} type='password' placeholder='Password' required />

        <Button
          type="submit"
          isLoading={loading}
          loadingText='Entrando...'
        >
          Entrar
        </Button>
      </form>
    </>
  );
};
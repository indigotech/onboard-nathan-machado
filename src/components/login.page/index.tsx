import { useState } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../atm.button';
import { Input } from '../atm.input';

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true)
    // some api request here...
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Bem vindo(a) à Taqtile!</h1>

        <Input 
          icon={<FiMail size={20} />}
          type='text'
          placeholder='E-mail' 
          required
        />
        
        <Input
          icon={<FiLock size={20} />}
          type='password'
          placeholder='Password'
          required
        />

        <Button type="submit">
          { isLoading ? "Loading..." : "Login" }
        </Button>
      </form>
    </>
  );
};
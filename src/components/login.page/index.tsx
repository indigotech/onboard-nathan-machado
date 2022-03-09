import { useState } from 'react'

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
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <button type="submit">{loading ? "Entrando..." : "Entrar"}</button>
        </div>
      </form>
    </>
  );
};
import { GlobalStyle } from 'app/styles/global';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Outlet />
      <GlobalStyle />
    </div>
  );
}

export default App;

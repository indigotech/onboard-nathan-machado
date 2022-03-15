import App from 'App';
import { LoginPage } from 'app/modules/login';
import { UserListPage } from 'app/modules/user';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<UserListPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

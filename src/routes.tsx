import App from 'App';
import { LoginPage } from 'app/modules/login';
import { UserListPage, NewUserPage } from 'app/modules/user';
import { ShowUserPage } from 'app/modules/user/show-user.page';
import { Navigate, Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' element={<Navigate to='/users' />} />

        <Route path='login' element={<LoginPage />} />

        <Route path='users'>
          <Route path='' element={<UserListPage />} />
          <Route path='new' element={<NewUserPage />} />
          <Route path=':id' element={<ShowUserPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

import { useQuery } from '@apollo/client';
import { UserRow } from 'app/components/user-row';
import { USER_LIST_TITLES } from 'app/constants';
import { UserListQuery } from 'app/services';
import { Table } from 'atomic/mol.table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  id: string;
  name: string;
  email: string;
}

export function UserListPage() {
  const { loading, error, data } = useQuery(UserListQuery, {
    variables: { offset: 0, limit: 20 },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.graphQLErrors[0].name == 'UnauthorizedError') {
      navigate('/login');
    }
  }, [error]);

  return (
    <>
      <h1>Users list</h1>
      <Table isLoading={loading} titles={USER_LIST_TITLES}>
        {data?.users?.nodes.map(({ id, name, email }: UserData) => {
          return <UserRow key={id} name={name} email={email} />;
        })}
      </Table>
    </>
  );
}

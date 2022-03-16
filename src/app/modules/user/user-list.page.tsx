import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { UserRow } from 'app/components/user-row';
import { PAGINATION_LIMIT, USER_LIST_TITLES } from 'app/constants';
import { UserListQuery } from 'app/services';
import { AlertMsg } from 'atomic/mol.alert-msg';
import { Table } from 'atomic/mol.table';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCurrentOffset, Paginator } from 'app/components/paginator';

interface UserData {
  id: string;
  name: string;
  email: string;
}

export function UserListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState('');
  const currentOffset = getCurrentOffset(searchParams);
  const { loading, error, data } = useQuery(UserListQuery, {
    variables: { offset: currentOffset, limit: PAGINATION_LIMIT },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.graphQLErrors[0].name == 'UnauthorizedError') {
      navigate('/login');
    } else if (error) {
      setErrorMsg(error.message);
    } else {
      setErrorMsg('');
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

      <Paginator isLoading={loading} count={data?.users?.count} limit={data?.users?.pageInfo.limit} />

      {errorMsg && <AlertMsg type='error'>{errorMsg}</AlertMsg>}
    </>
  );
}

import { UserRow } from 'app/components/user-row';
import { fakeData } from 'app/services/fake-data';
import { Table } from 'atomic/mol.table';

export function UserListPage() {
  const tableTitles = ['Name', 'E-mail'];

  return (
    <>
      <h1>Users list</h1>
      <Table titles={tableTitles}>
        {fakeData.userList.map(({ id, name, email }) => {
          return <UserRow key={id} name={name} email={email} />;
        })}
      </Table>
    </>
  );
}

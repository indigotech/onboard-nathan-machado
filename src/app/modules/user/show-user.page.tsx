import { useQuery } from '@apollo/client';
import { UserDetailsQuery } from 'app/services';
import { useParams } from 'react-router-dom';
import Loading from 'react-loading';
import { InfoLine } from 'app/components/info-line';
import { AlertMsg } from 'atomic/mol.alert-msg';

export function ShowUserPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(UserDetailsQuery, {
    variables: { id },
  });

  return (
    <>
      {loading ? (
        <Loading type='bars' color='#000' height={20} width={20} />
      ) : (
        <>
          {error ? (
            <AlertMsg type='error'>{error.message}</AlertMsg>
          ) : (
            <div>
              <h3>{`User #${data.user.id}`}</h3>
              <InfoLine title='Name' text={data.user.name} />
              <InfoLine title='E-mail' text={data.user.email} />
              <InfoLine title='Phone' text={data.user.phone} />
              <InfoLine title='Birth Date' text={new Date(data.user.birthDate).toLocaleDateString('pt-BR')} />
              <InfoLine title='Role' text={data.user.role} />
            </div>
          )}
        </>
      )}
    </>
  );
}

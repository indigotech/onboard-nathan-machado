interface UserRowProps {
  name: string;
  email: string;
}

export function UserRow(props: UserRowProps) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
    </tr>
  );
}

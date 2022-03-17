interface UserRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  name: string;
  email: string;
}

export function UserRow({ name, email, ...rest }: UserRowProps) {
  return (
    <tr {...rest}>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}

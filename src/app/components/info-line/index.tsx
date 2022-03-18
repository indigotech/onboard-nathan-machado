interface InfoLineProps {
  title: string;
  text: string;
}

export function InfoLine({ title, text }: InfoLineProps) {
  return (
    <p>
      <strong>{title}: </strong>
      {text}
    </p>
  );
}

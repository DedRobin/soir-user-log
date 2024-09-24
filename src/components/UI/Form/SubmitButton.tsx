interface SubmitButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function SubmitButton({
  text,
  type = 'button',
}: SubmitButtonProps) {
  return <button type={type}>{text}</button>;
}

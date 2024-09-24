import { FieldProps } from './Field';
import SubmitButton from './SubmitButton';

interface FormProps {
  heading: string;
  fields: FieldProps[];
  submitText: string;
}

export default function Form({ heading, submitText }: FormProps) {
  return (
    <form>
      <h2>{heading}</h2>
      <SubmitButton text={submitText} />
    </form>
  );
}

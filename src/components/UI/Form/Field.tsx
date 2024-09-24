import { HTMLInputTypeAttribute } from 'react';

export interface FieldProps {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
}

export default function Field({ id, label, type = 'text' }: FieldProps) {
  return (
    <div className="field">
      <input id={id} type={type} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

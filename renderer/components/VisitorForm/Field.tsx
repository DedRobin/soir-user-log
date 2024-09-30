import { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface FieldProps {
  id: string;
  register: UseFormRegisterReturn<string>;
  label: string;
  type: HTMLInputTypeAttribute | 'textarea';
  error: FieldError | undefined;
  autoFocus?: boolean;
}

export default function Field({
  id,
  register,
  label,
  type,
  error,
  autoFocus,
}: FieldProps) {
  return (
    <div className="field flex justify-between items-center gap-2 relative">
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          className="rounded p-2 basis-2/3"
          {...register}
          autoFocus={autoFocus}
        />
      ) : (
        <input
          className="rounded p-2 basis-2/3"
          type={type}
          {...register}
          autoFocus={autoFocus}
        />
      )}

      {error && (
        <span className="absolute right-0 px-2 text-red-500">
          Введите текст
        </span>
      )}
    </div>
  );
}

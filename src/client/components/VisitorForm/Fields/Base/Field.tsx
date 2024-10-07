import clsx from 'clsx';
import { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface FieldProps {
  id: string;
  register: UseFormRegisterReturn<string>;
  label: string;
  type: HTMLInputTypeAttribute | 'textarea';
  error: FieldError | undefined;
  autoFocus?: boolean;
  defaultValue?: string;
}

export default function Field({
  id,
  register,
  label,
  type,
  error,
  autoFocus,
  defaultValue,
}: FieldProps) {
  return (
    <div className="field flex justify-between items-center gap-2 relative">
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          className={clsx(
            'rounded p-2 basis-2/3',
            error && 'outline outline-2 outline-red-500'
          )}
          {...register}
          autoFocus={autoFocus}
        />
      ) : (
        <input
          className={clsx(
            'rounded p-2 basis-2/3',
            error && 'outline outline-2 outline-red-500'
          )}
          type={type}
          {...register}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
}

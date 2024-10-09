import clsx from 'clsx';
import { FormEventHandler, HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface FieldProps {
  id: string;
  register: UseFormRegisterReturn<string>;
  label: string;
  type: HTMLInputTypeAttribute | 'textarea';
  error: FieldError | undefined;
  autoFocus?: boolean;
  value?: string;
  defaultValue?: string;
  onInput?: FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function Field({
  id,
  register,
  label,
  type,
  error,
  autoFocus,
  value,
  defaultValue,
  onInput,
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
          value={value}
          defaultValue={defaultValue}
          onInput={onInput}
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
          value={value}
          defaultValue={defaultValue}
          onInput={onInput}
        />
      )}
    </div>
  );
}

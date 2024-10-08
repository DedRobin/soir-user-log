import { useRef } from 'react';
import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function DateField({ register, errors }: CustomFieldProps) {
  const date = useRef(new Date().toISOString().split('T')[0]);

  return (
    <div className="flex justify-center gap-3">
      <Field
        id="dateFrom"
        register={register('dateFrom', { required: true })}
        label="с"
        type="date"
        defaultValue={date.current}
        error={errors.dateFrom}
      />
      <Field
        id="dateTo"
        register={register('dateTo', { required: true })}
        label="по"
        type="date"
        defaultValue={date.current}
        error={errors.dateTo}
      />
    </div>
  );
}

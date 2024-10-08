import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function DateField({ register, errors }: CustomFieldProps) {
  return (
    <div className="flex justify-center gap-3">
      <Field
        id="dateFrom"
        register={register('dateFrom', { required: true })}
        label="с"
        type="date"
        error={errors.dateFrom}
      />
      <Field
        id="dateTo"
        register={register('dateTo', { required: true })}
        label="по"
        type="date"
        error={errors.dateTo}
      />
    </div>
  );
}

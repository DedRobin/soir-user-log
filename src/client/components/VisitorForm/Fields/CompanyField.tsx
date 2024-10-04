import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function CompanyField({ register, errors }: CustomFieldProps) {
  return (
    <Field
      id="company"
      register={register('company')}
      label="Организация"
      type="text"
      error={errors.company}
    />
  );
}

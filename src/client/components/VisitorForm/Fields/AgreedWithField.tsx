import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function AgreedWithField({
  register,
  errors,
}: CustomFieldProps) {
  return (
    <Field
      id="purpose"
      register={register('purpose')}
      label="Согласовано с"
      type="text"
      error={errors.purpose}
    />
  );
}

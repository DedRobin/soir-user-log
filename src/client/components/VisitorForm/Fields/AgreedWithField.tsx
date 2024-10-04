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
      label="Цель визита"
      type="textarea"
      error={errors.purpose}
    />
  );
}

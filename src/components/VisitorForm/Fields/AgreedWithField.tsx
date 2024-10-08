import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function AgreedWithField({
  register,
  errors,
}: CustomFieldProps) {
  return (
    <Field
      id="agreedWith"
      register={register('agreedWith')}
      label="Согласовано с"
      type="text"
      error={errors.agreedWith}
    />
  );
}

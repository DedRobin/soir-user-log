import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function AccompanyingField({
  register,
  errors,
}: CustomFieldProps) {
  return (
    <Field
      id="agreedWith"
      register={register('agreedWith')}
      label="Совпровождающий"
      type="text"
      error={errors.agreedWith}
    />
  );
}

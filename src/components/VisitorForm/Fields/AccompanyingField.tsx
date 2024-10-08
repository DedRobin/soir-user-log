import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function AccompanyingField({
  register,
  errors,
}: CustomFieldProps) {
  return (
    <Field
      id="accompanying"
      register={register('accompanying')}
      label="Совпровождающий"
      type="text"
      error={errors.accompanying}
    />
  );
}

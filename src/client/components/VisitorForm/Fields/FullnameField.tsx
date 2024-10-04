import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function FullnameField({ register, errors }: CustomFieldProps) {
  return (
    <Field
      id="fullname"
      register={register('fullname', { required: true })}
      label="Ф.И.О."
      type="text"
      error={errors.fullname}
      autoFocus={true}
    />
  );
}

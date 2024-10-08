import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';

export default function CarField({ register, errors }: CustomFieldProps) {
  return (
    <Field
      id="car"
      register={register('car')}
      label="Автомобиль, номер"
      type="text"
      error={errors.car}
    />
  );
}

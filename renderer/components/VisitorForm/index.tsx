import { SubmitHandler, useForm } from 'react-hook-form';
import Field from './Field';
import ButtonGroup from './ButtonGroup';
import { writeDataToXLSX } from '@/app/actions';

export const fieldNames = {
  fullname: 'Ф.И.О.',
  company: 'Организация',
  purpose: 'Цель визита',
  car: 'Автотранспорт (марка, номер)',
};

export type VisitorFormInput = typeof fieldNames;

export default function VisitorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VisitorFormInput>();

  const submitForm: SubmitHandler<VisitorFormInput> = (data) => {
    const arrayData = Object.values(data);
    writeDataToXLSX(arrayData);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-3xl text-center py-5">Добавить посетителя</h2>
      <Field
        id="fullname"
        register={register('fullname', { required: true })}
        label={fieldNames.fullname}
        type="text"
        error={errors.fullname}
        autoFocus={true}
      />
      <Field
        id="company"
        register={register('company')}
        label={fieldNames.company}
        type="text"
        error={errors.company}
      />
      <Field
        id="purpose"
        register={register('purpose')}
        label={fieldNames.purpose}
        type="textarea"
        error={errors.purpose}
      />
      <Field
        id="car"
        register={register('car')}
        label={fieldNames.car}
        type="text"
        error={errors.car}
      />
      <ButtonGroup clearForm={() => reset()} />
    </form>
  );
}

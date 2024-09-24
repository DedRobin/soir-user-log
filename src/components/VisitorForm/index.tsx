import { SubmitHandler, useForm } from 'react-hook-form';
import Field from './Field';
import ButtonGroup from './ButtonGroup';

interface VisitorFormInput {
  fullname: string;
  car: string;
}

export default function VisitorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisitorFormInput>();
  const submitForm: SubmitHandler<VisitorFormInput> = (data) => {
    alert([data.fullname, data.car]);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-3xl">Посетители</h2>
      <Field
        id="fullname"
        register={register('fullname', { required: true })}
        label="Ф.И.О."
        type="text"
        error={errors.fullname}
      />
      <Field
        id="car"
        register={register('car', { required: true })}
        label="Номер автомобиль"
        type="text"
        error={errors.car}
      />
      <ButtonGroup />
    </form>
  );
}

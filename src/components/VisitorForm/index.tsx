import { SubmitHandler, useForm } from 'react-hook-form';
import Field from './Field';
import ButtonGroup from './ButtonGroup';

interface VisitorFormInput {
  fullname: string;
  car: string;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function VisitorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VisitorFormInput>();

  const submitForm: SubmitHandler<VisitorFormInput> = async () => {
    // alert([data.fullname, data.car]);
    await fetch('http://127.0.0.1:3000/')
      .then((res) => res.json())
      .then(async (data) => {
        await sleep(2000);
        return data;
      })
      .then((data) => alert(JSON.stringify(data)))
      .catch((error) => console.error(error));
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
        autoFocus={true}
      />
      <Field
        id="car"
        register={register('car', { required: true })}
        label="Номер автомобиль"
        type="text"
        error={errors.car}
      />
      <ButtonGroup clearForm={() => reset()} isSubmitting={isSubmitting} />
    </form>
  );
}

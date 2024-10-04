import { SubmitHandler, useForm } from 'react-hook-form';
import Field from './Field';
import ButtonGroup from './ButtonGroup';
import { sendRequest } from '@/lib/http/requests';

export interface VisitorFormInput {
  fullname: string;
  car: string;
}

export default function VisitorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VisitorFormInput>();

  const submitForm: SubmitHandler<VisitorFormInput> = async (formData) => {
    const url = import.meta.env.VITE_SERVER_URL;
    const method = 'POST';
    if (!url) {
      alert('No URL');
      throw new Error('No URL');
    }
    const response = await sendRequest(url, method, formData);
    if (response.status === 200) {
      const data = await response.json();
      alert(data);
    }
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

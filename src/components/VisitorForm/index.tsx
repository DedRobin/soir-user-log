import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonGroup from './ButtonGroup';
import { sendRequest } from '../../lib/http/requests';
import DateField from './Fields/DateField';
import FullnameField from './Fields/FullnameField';
import CarField from './Fields/CarField';
import PurposeField from './Fields/PurposeField';
import CompanyField from './Fields/CompanyField';
import AccompanyingField from './Fields/AccompanyingField';
import AgreedWithField from './Fields/AgreedWithField';
import { toast as notify } from 'react-toastify';

export interface VisitorFormInput {
  fullname: string;
  car: string;
  purpose: string;
  company: string;
  accompanying: string;
  agreedWith: string;
  dateFrom: string;
  dateTo: string;
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
      const msg = await response.text();
      notify.success(msg);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-3xl text-center my-5">Посетитель</h2>
      <FullnameField register={register} errors={errors} />
      <CarField register={register} errors={errors} />
      <PurposeField register={register} errors={errors} />
      <CompanyField register={register} errors={errors} />
      <AccompanyingField register={register} errors={errors} />
      <AgreedWithField register={register} errors={errors} />
      <DateField register={register} errors={errors} />
      <ButtonGroup clearForm={() => reset()} isSubmitting={isSubmitting} />
    </form>
  );
}

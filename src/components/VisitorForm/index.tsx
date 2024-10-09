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
import Endpoint from '@/lib/http/endpoints';

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
    const method = 'POST';

    try {
      const response = await sendRequest(Endpoint.AddVisitor, method, formData);
      const { status } = response;

      switch (status) {
        case 200:
          {
            const msg = await response.text();
            notify.success(msg);
          }
          break;
        default:
          notify.warning(`\nStatus code = ${status}\nЧто-то пошло не так.`);
      }
    } catch (error) {
      notify.error('Нет связи с сервером.');
      console.error(error);
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

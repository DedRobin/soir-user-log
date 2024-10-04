import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { VisitorFormInput } from '../..';

export interface CustomFieldProps {
  register: UseFormRegister<VisitorFormInput>;
  errors: FieldErrors<VisitorFormInput>;
}

import { BaseSyntheticEvent, useState } from 'react';
import Field from './Base/Field';
import { CustomFieldProps } from './Base/interfaces';
import { capitalize } from '@/utils/string';

export default function FullnameField({ register, errors }: CustomFieldProps) {
  const [inputValue, setInputValue] = useState('');

  const onInput = (event: BaseSyntheticEvent) => {
    if (event.target instanceof HTMLInputElement) {
      const text = event.target.value;
      const words = text.split(' ');
      const capitalizedWords = words.map((word) => capitalize(word));
      const formattedText = capitalizedWords.join(' ');
      setInputValue(formattedText);
    }
  };

  return (
    <Field
      id="fullname"
      register={register('fullname', { required: true })}
      label="Ф.И.О."
      type="text"
      error={errors.fullname}
      autoFocus={true}
      value={inputValue}
      onInput={onInput}
    />
  );
}

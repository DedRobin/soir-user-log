import { MouseEventHandler } from 'react';
import Loader from '../UI/Loader';

export default function ButtonGroup({
  clearForm,
  isSubmitting,
}: {
  clearForm: MouseEventHandler<HTMLButtonElement>;
  isSubmitting: boolean;
}) {
  return (
    <div className="button-group flex justify-center *:basis-1/3 gap-2">
      <button
        className="clear-button bg-red-900"
        type="button"
        onClick={clearForm}
      >
        Очистить форму
      </button>
      <button
        className={[
          'submit-button flex justify-center items-center',
          isSubmitting && 'pointer-events-none',
        ].join(' ')}
        type="submit"
      >
        {isSubmitting ? <Loader /> : 'Добавить'}
      </button>
    </div>
  );
}

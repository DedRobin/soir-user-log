import { MouseEventHandler } from 'react';

export default function ButtonGroup({
  clearForm,
}: {
  clearForm: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="button-group self-end flex gap-2">
      <button
        className="clear-button bg-red-900"
        type="button"
        onClick={clearForm}
      >
        Очистить форму
      </button>
      <button className="submit-button" type="submit">
        Добавить
      </button>
    </div>
  );
}

export default function ButtonGroup() {
  return (
    <div className="button-group self-end flex gap-2">
      <button className="clear-button bg-red-900" type="button">
        Очистить форму
      </button>
      <button className="submit-button" type="submit">
        Добавить
      </button>
    </div>
  );
}

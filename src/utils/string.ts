export function capitalize(text: string) {
  if (text) {
    if (text.length === 1) return text[0].toUpperCase();
    else return text[0].toUpperCase() + text.slice(1);
  }
  return text;
}

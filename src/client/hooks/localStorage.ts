import { useEffect, useState } from 'react';

export function useLocalStorage(
  key: string
): [string | null, (newValue: string) => void] {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const current = localStorage.getItem(key);
    setValue(current);
  }, [key]);

  function setNewValue(newValue: string) {
    localStorage.setItem(key, newValue);
  }

  return [value, setNewValue];
}

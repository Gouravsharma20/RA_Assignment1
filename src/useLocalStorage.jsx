import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValues] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  function setValue(newValue) {
    setValues(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return { value, setValue };
}

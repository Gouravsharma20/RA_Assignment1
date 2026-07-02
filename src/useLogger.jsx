import { useState, useEffect } from "react";

export default function useLogger(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);

  return { value, setValue };
}

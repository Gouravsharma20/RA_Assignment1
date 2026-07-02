import { useState } from "react";

export default function useCounter(num) {
  const [counter, setCounter] = useState(num);
  function incrementCounter() {
    setCounter((count) => count + 1);
  }
  function decrementCounter() {
    setCounter((count) => count - 1);
  }
  return { counter, incrementCounter, decrementCounter };
}

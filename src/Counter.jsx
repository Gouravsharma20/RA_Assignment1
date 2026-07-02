import useCounter from "./useCounter";

export default function Counter() {
  const { counter, incrementCounter, decrementCounter } = useCounter(0);
  return (
    <>
      <h1>UseCount Hook {counter}</h1>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
    </>
  );
}

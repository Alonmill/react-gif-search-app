import { useCounter } from '../hooks/useCounter'

export const MyCounterApp = () => {
    const {counter, handleAdd, handleReset, handleSubtract} = useCounter(5);
     const {counter: counter2} = useCounter(5);

  return (
    <>
        <h1>Contador {counter} - {counter2}</h1>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}

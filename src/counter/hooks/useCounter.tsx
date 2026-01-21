import { useState } from "react";

export const useCounter = (initial: number = 5) => {

    const [counter, setCounter] = useState(initial);

    const handleAdd = () => {
        setCounter(counter => counter + 1)
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(initial)
    }

  return {
    counter,
    handleAdd,
    handleSubtract,
    handleReset
  }
}

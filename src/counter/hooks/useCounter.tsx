import { useState } from "react";

export const useCounter = (initial: number = 0) => {

    const [counter, setCounter] = useState(initial);

    const handleAdd = () => {
        setCounter(counter + 1)
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

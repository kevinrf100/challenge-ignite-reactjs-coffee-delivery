import { Minus, Plus } from "phosphor-react";
import { Button } from "../Button";
import { useState } from "react";
import { CounterContainer, CounterInput } from "./styles";

export function InputCount() {
  const [counter, setCounter] = useState(0);

  function increment(): void {
    setCounter((counter) => counter + 1);
  }

  function decrement() {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  }

  function handleCounterChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCounter(parseInt(event.target.value));
  }

  return (
    <CounterContainer>
      <Button
        buttonBackgroundColor="white-900"
        buttonColor="purple-800"
        onClick={decrement}
      >
        <Minus></Minus>
      </Button>
      <CounterInput
        type="number"
        value={counter}
        onChange={handleCounterChange}
      />
      <Button
        buttonBackgroundColor="white-900"
        buttonColor="purple-800"
        onClick={increment}
      >
        <Plus></Plus>
      </Button>
    </CounterContainer>
  );
}

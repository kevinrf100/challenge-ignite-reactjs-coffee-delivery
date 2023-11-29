import { Minus, Plus } from "phosphor-react";
import { Button } from "../button";
import { CounterContainer, CounterInput } from "./styles";
import { useTheme } from "styled-components";

interface InputCountProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}

export function InputCount({ setCounter, counter }: InputCountProps) {
  const theme = useTheme();

  function increment(): void {
    setCounter((currentCounter) => currentCounter + 1);
  }

  function decrement() {
    if (counter > 1) {
      setCounter((currentCounter) => currentCounter - 1);
    }
  }

  function handleCounterChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setCounter(parseInt(event.target.value));
  }

  return (
    <CounterContainer>
      <Button onClick={decrement}>
        <Minus color={theme["purple-500"]}></Minus>
      </Button>
      <CounterInput
        type="number"
        value={counter}
        onChange={handleCounterChange}
      />
      <Button onClick={increment}>
        <Plus color={theme["purple-500"]}></Plus>
      </Button>
    </CounterContainer>
  );
}

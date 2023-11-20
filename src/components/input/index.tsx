import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./style";

type InputProp = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: InputProp) {
  return <InputStyleContainer {...props} />;
}

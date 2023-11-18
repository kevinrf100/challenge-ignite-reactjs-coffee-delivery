import { ReactNode } from "react";
import { ButtonContainer } from "./styles";
import { defaultTheme } from "../../styles/themes/defaultTheme";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  buttonColor: keyof typeof defaultTheme;
  buttonBackgroundColor: keyof typeof defaultTheme;
}

export function Button({
  onClick,
  children,
  buttonColor,
  buttonBackgroundColor,
}: ButtonProps) {
  return (
    <ButtonContainer
      buttonbackground={buttonBackgroundColor}
      buttoncolor={buttonColor}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
}

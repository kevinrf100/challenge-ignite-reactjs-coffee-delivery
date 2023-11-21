import { defaultTheme } from "../../styles/themes/defaultTheme";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  background: keyof typeof defaultTheme;
}

export function Button({ background, children, ...props }: ButtonProps) {
  return (
    <ButtonContainer background={background} {...props}>
      {children}
    </ButtonContainer>
  );
}

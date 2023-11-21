import { ButtonContainer } from "./styles";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({ children, ...props }: IconButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

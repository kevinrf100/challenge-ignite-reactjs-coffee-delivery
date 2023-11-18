import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";

interface ButtonContainerProps {
  buttoncolor: keyof typeof defaultTheme;
  buttonbackground: keyof typeof defaultTheme;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 8px;
  border: 0;

  color: ${(props) => props.theme[props.buttoncolor]};
  background: ${(props) => props.theme[props.buttonbackground]};
`;

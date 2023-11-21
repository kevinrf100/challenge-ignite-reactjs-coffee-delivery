import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";

interface ButtonProps {
  background?: keyof typeof defaultTheme;
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 8px;
  border: 0;

  background: ${(props) =>
    props.background
      ? props.theme[props.background]
      : props.theme["white-900"]};
  color: ${(props) => props.theme["black-500"]};
`;

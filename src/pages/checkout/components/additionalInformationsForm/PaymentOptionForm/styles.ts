import styled from "styled-components";
import { BasicFormContainer } from "../styles";

export const PaymentOptionFormContainer = styled(BasicFormContainer)``;

export const PaymentOptionContainer = styled.div`
  display: flex;

  gap: 0.75rem;
`;

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;

  border-radius: 8px;
  border: none;

  background: ${(props) => props.theme["white-900"]};
  color: ${(props) => props.theme["black-500"]};

  padding: 1rem;

  gap: 0.75rem;

  &:hover {
    background: ${(props) => props.theme["black-100"]};
  }

  &.selected {
    background: ${(props) => props.theme["purple-100"]};
    border: 1px solid ${(props) => props.theme["purple-500"]};
  }
`;

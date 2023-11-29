import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;

  border-radius: 8px;
  border: none;

  background: ${(props) => props.theme["white-900"]};
  color: ${(props) => props.theme["black-500"]};

  /* padding: 1rem; */
  padding: 0 0.75rem;

  gap: 0.25rem;
  /* gap: 0.75rem; */

  &:hover {
    background: ${(props) => props.theme["black-100"]};
    cursor: pointer;
  }

  &.selected {
    background: ${(props) => props.theme["purple-100"]};
    border: 1px solid ${(props) => props.theme["purple-500"]};
  }
`;

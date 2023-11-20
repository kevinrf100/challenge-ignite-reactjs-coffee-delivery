import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 2.6rem;
  border-radius: 4px;

  border: 1px solid ${(props) => props.theme["white-900"]};

  background: ${(props) => props.theme["white-700"]};
  color: ${(props) => props.theme["black-500"]};

  padding: 0.75rem;

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &::placeholder {
    color: ${(props) => props.theme["black-300"]};
  }
`;

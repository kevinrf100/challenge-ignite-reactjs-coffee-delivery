import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;

  Button:first-child {
    border-radius: 8px 0 0 8px;
  }

  Button:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const CounterInput = styled.input`
  width: 1.25rem;
  text-align: center;

  border: 0px;

  background: ${(props) => props.theme["white-900"]};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

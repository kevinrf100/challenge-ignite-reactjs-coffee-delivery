import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;

  background: ${(props) => props.theme["white-300"]};
`;

export const HeaderContentContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 8px;
  border: 0;
`;

export const AddressButton = styled(Button)`
  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-800"]};

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const CartButton = styled(Button)`
  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-800"]};

  &:hover {
    cursor: pointer;
  }
`;

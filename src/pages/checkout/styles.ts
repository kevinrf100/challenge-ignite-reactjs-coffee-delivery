import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;

  gap: 2rem;

  margin-top: 2.5rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`;

export const CheckoutContent = styled.div``;

export const BasicContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["white-500"]};
`;

export const BasicTitle = styled.h1`
  color: ${(props) => props.theme["black-700"]};

  padding: 2.5rem 0 1rem 0;

  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

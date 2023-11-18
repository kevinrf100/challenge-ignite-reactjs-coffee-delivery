import styled from "styled-components";

export const CoffeeShopContainer = styled.div`
  margin-bottom: 9.4rem;
`;

export const CoffeeShopContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 2rem;

  padding-bottom: 2rem;
`;

export const CoffeeListTitle = styled.h1`
  color: ${(props) => props.theme["black-700"]};

  font-family: "Baloo 2";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`;

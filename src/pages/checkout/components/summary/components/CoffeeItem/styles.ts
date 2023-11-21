import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 0 1.5rem 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["white-900"]};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1.25rem;
`;

export const CoffeeImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const CoffeeDetailsContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const CoffeeName = styled.div`
  font-family: "Roboto";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
`;

export const CoffeeActionButtons = styled.div`
  display: flex;

  gap: 0.25rem;
`;

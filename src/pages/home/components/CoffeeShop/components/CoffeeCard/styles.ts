import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme["white-500"]};

  border-radius: 6px 36px;

  padding: 0 1.25rem;
`;

export const HeaderContainer = styled.div`
  margin-top: -1.25rem;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  text-align: center;
`;

export const CoffeeTagsContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;
`;

export const CoffeeTag = styled.p`
  color: ${(props) => props.theme["yellow-800"]};
  background: ${(props) => props.theme["yellow-100"]};

  padding: 0.5rem;

  border-radius: 100px;

  font-family: Roboto;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`;

export const CoffeeTitle = styled.h2`
  color: ${(props) => props.theme["black-700"]};
  text-align: center;

  font-family: Baloo 2;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme["black-300"]};
  text-align: center;

  margin-top: 0.5rem;

  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const CoffeePrice = styled.p`
  color: ${(props) => props.theme["black-500"]};

  text-align: right;

  font-family: "Roboto";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  span {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-top: 2.063rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

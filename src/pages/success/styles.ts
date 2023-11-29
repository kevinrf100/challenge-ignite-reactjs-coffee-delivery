import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding-top: 5rem;

  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`;

export const SuccessContent = styled.div``;

export const SuccessTitle = styled.h1`
  color: ${(props) => props.theme["yellow-800"]};

  font-family: "Baloo 2";
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`;

export const SuccessDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const SuccessDeliveryInformationContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 2.5rem;
  align-items: center;

  gap: 5rem;
`;

import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 5.75rem 0;

  gap: 3.5rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 0.125rem;

  /* max-width: 36.75rem; */

  gap: 4.125rem;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 35.438rem;
  height: 5.25rem;
`;

export const BenefitsColumn = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

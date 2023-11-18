import styled from "styled-components";

export const HeaderFormContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HeaderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h2`
  color: ${(props) => props.theme["black-700"]};

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const HeaderDescription = styled.div`
  color: ${(props) => props.theme["black-500"]};

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

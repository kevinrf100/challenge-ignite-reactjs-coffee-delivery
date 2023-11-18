import styled from "styled-components";

export const AdditionalInformationFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`;

export const AdditionalInformationTitle = styled.h1`
  color: ${(props) => props.theme["black-700"]};

  padding: 2.5rem 0 1rem 0;

  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const BasicFormContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme["white-500"]};
`;

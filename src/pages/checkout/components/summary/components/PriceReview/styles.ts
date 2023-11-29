import styled from "styled-components";

export const PriceReviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75;

  button {
    margin-top: 1.5rem;
    height: 3rem;
    font-weight: 700;
    justify-content: center;
    color: ${(props) => props.theme["white-700"]};

    &:hover {
      background: ${(props) => props.theme["yellow-800"]};
    }
  }
`;

export const PriceReviewContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceReviewTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme["black-300"]};
`;
export const PriceReviewTotalTitle = styled(PriceReviewTitle)`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme["black-700"]};
`;

export const PriceReviewValue = styled.h1`
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme["black-300"]};
`;

export const PriceReviewTotalValue = styled(PriceReviewValue)`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme["black-700"]};
`;

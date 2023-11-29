import styled from "styled-components";

export const OderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  border: 1px solid transparent;

  border-radius: 6px 32px;

  gap: 2rem;

  min-width: 526px;

  background: linear-gradient(${(props) => props.theme["white-300"]} 0 0)
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["yellow-500"]},
        ${(props) => props.theme["purple-500"]}
      )
      border-box;
`;

export const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

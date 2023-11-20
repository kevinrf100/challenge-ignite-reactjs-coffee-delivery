import styled from "styled-components";
import { BasicContainer, BasicTitle } from "../../styles";

export const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`;

export const SummaryTitle = styled(BasicTitle)``;

export const SummaryContent = styled(BasicContainer)`
  border-radius: 6px 44px;
`;

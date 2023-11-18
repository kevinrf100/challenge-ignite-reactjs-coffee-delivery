import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ICON_BACKGROUND_COLORS = {
  orange: "yellow-800",
  yellow: "yellow-500",
  black: "black-500",
  purple: "purple-500",
} as const;

interface IconBackgroundProps {
  iconcolor: keyof typeof ICON_BACKGROUND_COLORS;
}

export const IconContainer = styled.div<IconBackgroundProps>`
  padding: 0.5rem;
  border-radius: 50%;

  width: 32px;
  height: 32px;

  background: ${(props) =>
    props.theme[ICON_BACKGROUND_COLORS[props.iconcolor]]};
`;

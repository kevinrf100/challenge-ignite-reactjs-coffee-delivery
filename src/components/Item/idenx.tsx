import { ReactElement } from "react";
import { ICON_BACKGROUND_COLORS, IconContainer, ItemContainer } from "./styles";

interface ItemProps {
  description: string;
  icon: ReactElement;
  color?: string;
  iconBackgroundColor: keyof typeof ICON_BACKGROUND_COLORS;
}

export function Item({ icon, description, iconBackgroundColor }: ItemProps) {
  return (
    <ItemContainer>
      <IconContainer iconcolor={iconBackgroundColor}>{icon}</IconContainer>
      <p>{description}</p>
    </ItemContainer>
  );
}

import React, { ReactElement } from "react";
import { ICON_BACKGROUND_COLORS, IconContainer, ItemContainer } from "./styles";

interface ItemProps {
  children: React.ReactNode;
  icon: ReactElement;
  color?: string;
  iconBackgroundColor: keyof typeof ICON_BACKGROUND_COLORS;
}

export function Item({ icon, children, iconBackgroundColor }: ItemProps) {
  return (
    <ItemContainer>
      <IconContainer iconcolor={iconBackgroundColor}>{icon}</IconContainer>
      {children}
    </ItemContainer>
  );
}

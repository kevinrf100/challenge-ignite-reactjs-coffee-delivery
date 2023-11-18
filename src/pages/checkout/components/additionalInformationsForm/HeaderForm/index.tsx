import React from "react";
import {
  HeaderDescription,
  HeaderTitle,
  HeaderFormContainer,
  HeaderInformationContainer,
} from "./styles";

interface HeaderFormProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export default function HeaderForm({
  icon,
  title,
  description,
}: HeaderFormProps) {
  return (
    <HeaderFormContainer>
      {icon}
      <HeaderInformationContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderDescription>{description}</HeaderDescription>
      </HeaderInformationContainer>
    </HeaderFormContainer>
  );
}

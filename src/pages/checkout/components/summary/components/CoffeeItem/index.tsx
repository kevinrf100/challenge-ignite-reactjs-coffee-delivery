import { useTheme } from "styled-components";
import IconButton from "../../../../../../components/Buttons/IconButton";
import { InputCount } from "../../../../../../components/InputCount";
import {
  CoffeeName,
  CoffeeDetailsContainer,
  CoffeeItemContainer,
  ItemContainer,
  CoffeeActionButtons,
  CoffeeImg,
} from "./styles";
import { Trash } from "phosphor-react";
import { Coffee } from "../../../../../home/components/CoffeeShop/components/CoffeeCard";

export interface CoffeeItemProps {
  coffee: Coffee;
}

export default function CoffeeItem({ coffee }: CoffeeItemProps) {
  const theme = useTheme();
  // "/Coffees/WithMilk/Capuccino.png"
  return (
    <CoffeeItemContainer>
      <ItemContainer>
        <CoffeeImg src={coffee.image} alt="coffee" />
        <CoffeeDetailsContainer>
          <CoffeeName>{coffee.title}</CoffeeName>
          <CoffeeActionButtons>
            <InputCount />
            <IconButton onClick={() => {}}>
              <Trash color={theme["purple-500"]} />
              Remover
            </IconButton>
          </CoffeeActionButtons>
        </CoffeeDetailsContainer>
      </ItemContainer>
    </CoffeeItemContainer>
  );
}

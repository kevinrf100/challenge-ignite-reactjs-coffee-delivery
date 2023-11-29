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
import { useContext, useEffect, useState } from "react";
import { CartContext, Item } from "../../../../../../contexts/CartContext";

export interface CoffeeItemProps {
  coffee: Item;
}

export default function CoffeeItem({ coffee }: CoffeeItemProps) {
  const theme = useTheme();
  const { removeItem, modifyItem } = useContext(CartContext);
  const [counter, setCounter] = useState(coffee.amount);

  function handleRemoveItem(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    removeItem(coffee);
  }

  useEffect(() => {
    const newCoffeeAmount = { ...coffee, amount: counter };
    modifyItem(newCoffeeAmount);
  }, [counter]);

  return (
    <CoffeeItemContainer>
      <ItemContainer>
        <CoffeeImg src={coffee.image} alt="coffee" />
        <CoffeeDetailsContainer>
          <CoffeeName>{coffee.title}</CoffeeName>
          <CoffeeActionButtons>
            <InputCount counter={counter} setCounter={setCounter} />
            <IconButton onClick={handleRemoveItem}>
              <Trash color={theme["purple-500"]} />
              Remover
            </IconButton>
          </CoffeeActionButtons>
        </CoffeeDetailsContainer>
      </ItemContainer>
    </CoffeeItemContainer>
  );
}

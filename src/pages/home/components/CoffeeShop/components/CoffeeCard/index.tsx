import { ShoppingCart } from "phosphor-react";
import expresso from "../../../../../../assets/Expresso.png";
import { Button } from "../../../../../../components/button";
import {
  ActionContainer,
  BodyContainer,
  CoffeeContainer,
  CoffeeDescription,
  CoffeePrice,
  CoffeeTag,
  CoffeeTagsContainer,
  CoffeeTitle,
  FooterContainer,
  HeaderContainer,
} from "./styles";
import { InputCount } from "../../../../../../components/InputCount";
import { useTheme } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";

export interface Coffee {
  id: string;
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const theme = useTheme();
  const { addItem } = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  const formattedPrice = coffee.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  function handleAddCoffeeToCart() {
    addItem({ ...coffee, amount: counter });
  }

  return (
    <CoffeeContainer>
      <HeaderContainer>
        <img src={coffee.image} alt="" />
      </HeaderContainer>
      <BodyContainer>
        <CoffeeTagsContainer>
          {coffee.tags.map((tag, index) => (
            <CoffeeTag key={index}>{tag}</CoffeeTag>
          ))}
        </CoffeeTagsContainer>
        <CoffeeTitle>{coffee.title}</CoffeeTitle>
        <CoffeeDescription>{coffee.description}</CoffeeDescription>
      </BodyContainer>
      <FooterContainer>
        <CoffeePrice>
          R$ <span>{formattedPrice}</span>
        </CoffeePrice>
        <ActionContainer>
          <InputCount setCounter={setCounter} counter={counter} />
          <Button
            color={theme["white-500"]}
            background="purple-500"
            onClick={handleAddCoffeeToCart}
          >
            <ShoppingCart size={22} weight="fill" color="white" />
          </Button>
        </ActionContainer>
      </FooterContainer>
    </CoffeeContainer>
  );
}

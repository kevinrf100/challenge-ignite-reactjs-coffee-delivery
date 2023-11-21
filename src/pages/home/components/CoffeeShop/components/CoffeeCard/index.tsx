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

export interface Coffee {
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
  const formattedPrice = coffee.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

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
          <InputCount />
          <Button
            buttonColor="white-500"
            buttonBackgroundColor="purple-800"
            onClick={() => {
              console.log("Testing");
            }}
          >
            <ShoppingCart size={22} weight="fill" color="white" />
          </Button>
        </ActionContainer>
      </FooterContainer>
    </CoffeeContainer>
  );
}

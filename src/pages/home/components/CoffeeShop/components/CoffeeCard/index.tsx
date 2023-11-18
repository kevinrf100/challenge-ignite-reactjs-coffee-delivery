import { ShoppingCart } from "phosphor-react";
import expresso from "../../../../../../assets/Expresso.png";
import { Button } from "../../../../../../components/Button";
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

interface CoffeeProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function CoffeeCard({
  image,
  tags,
  title,
  description,
  price,
}: CoffeeProps) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return (
    <CoffeeContainer>
      <HeaderContainer>
        <img src={image} alt="" />
      </HeaderContainer>
      <BodyContainer>
        <CoffeeTagsContainer>
          {tags.map((tag, index) => (
            <CoffeeTag key={index}>{tag}</CoffeeTag>
          ))}
        </CoffeeTagsContainer>
        <CoffeeTitle>{title}</CoffeeTitle>
        <CoffeeDescription>{description}</CoffeeDescription>
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
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </ActionContainer>
      </FooterContainer>
    </CoffeeContainer>
  );
}

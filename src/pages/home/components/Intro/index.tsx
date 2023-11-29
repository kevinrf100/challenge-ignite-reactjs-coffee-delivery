import {
  BenefitsColumn,
  BenefitsContainer,
  BenefitsTitle,
  InformationContainer,
  IntroContainer,
  IntroContentContainer,
  Title,
} from "./styles";
import coffeDeliveryIntro from "./../../../../assets/CoffeDeliveryIntro.png";
import { Item } from "../../../../components/Item";
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContentContainer>
        <InformationContainer>
          <Title>
            Encontre o café perfeito para qualquer hora do dia
            <BenefitsTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </BenefitsTitle>
          </Title>
          <BenefitsContainer>
            <BenefitsColumn>
              <Item
                icon={<ShoppingCartSimple size={16} color="white" />}
                iconBackgroundColor="orange"
              >
                <BenefitsTitle>Compra simples e segura</BenefitsTitle>
              </Item>
              <Item
                icon={<Timer size={16} color="white" />}
                iconBackgroundColor="yellow"
              >
                <BenefitsTitle>Entrega rápida e rastreada</BenefitsTitle>
              </Item>
            </BenefitsColumn>
            <BenefitsColumn>
              <Item
                icon={<Package size={16} color="white" />}
                iconBackgroundColor="black"
              >
                <BenefitsTitle>Embalagem mantém o café intacto</BenefitsTitle>
              </Item>
              <Item
                icon={<Coffee size={16} color="white" />}
                iconBackgroundColor="purple"
              >
                <BenefitsTitle>O café chega fresquinho até você</BenefitsTitle>
              </Item>
            </BenefitsColumn>
          </BenefitsContainer>
        </InformationContainer>
        <img src={coffeDeliveryIntro} alt="" />
      </IntroContentContainer>
    </IntroContainer>
  );
}

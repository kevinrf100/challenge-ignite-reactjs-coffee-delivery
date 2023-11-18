import {
  BenefitsColumn,
  BenefitsContainer,
  InformationContainer,
  IntroContainer,
  IntroContentContainer,
  Title,
} from "./styles";
import coffeDeliveryIntro from "./../../../../assets/CoffeDeliveryIntro.png";
import { Item } from "../../../../components/Item/idenx";
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContentContainer>
        <InformationContainer>
          <Title>
            Encontre o café perfeito para qualquer hora do dia
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <BenefitsContainer>
            <BenefitsColumn>
              <Item
                icon={<ShoppingCartSimple size={16} color="white" />}
                iconBackgroundColor="orange"
                description="Compra simples e segura"
              />
              <Item
                icon={<Timer size={16} color="white" />}
                iconBackgroundColor="yellow"
                description="Entrega rápida e rastreada"
              />
            </BenefitsColumn>
            <BenefitsColumn>
              <Item
                icon={<Package size={16} color="white" />}
                iconBackgroundColor="black"
                description="Embalagem mantém o café intacto"
              />
              <Item
                icon={<Coffee size={16} color="white" />}
                iconBackgroundColor="purple"
                description="O café chega fresquinho até você"
              />
            </BenefitsColumn>
          </BenefitsContainer>
        </InformationContainer>
        <img src={coffeDeliveryIntro} alt="" />
      </IntroContentContainer>
    </IntroContainer>
  );
}

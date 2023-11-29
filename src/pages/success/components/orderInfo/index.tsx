import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { Item } from "../../../../components/Item";
import { ItemDetailsContainer, OderInfoContainer } from "./styles";
import { useTheme } from "styled-components";

export default function OrderInfo() {
  const theme = useTheme();

  return (
    <OderInfoContainer>
      <Item
        icon={<MapPin size={16} color="white" weight="fill" />}
        iconBackgroundColor="purple"
      >
        <ItemDetailsContainer>
          <p>
            Entrega em <b>Rua João Daniel Martinelli, 102</b>
          </p>
          <p>Farrapos - Porto Alegre, RS</p>
        </ItemDetailsContainer>
      </Item>
      <Item
        icon={<Clock size={16} color="white" />}
        iconBackgroundColor="yellow"
      >
        <ItemDetailsContainer>
          <p>Previsão de entrega</p>
          <p>20 min - 30 min </p>
        </ItemDetailsContainer>
      </Item>
      <Item
        icon={<CurrencyDollar size={16} color="white" />}
        iconBackgroundColor="orange"
      >
        <ItemDetailsContainer>
          <p>Pagamento na entrega</p>
          <p>Cartão de Crédito</p>
        </ItemDetailsContainer>
      </Item>
    </OderInfoContainer>
  );
}

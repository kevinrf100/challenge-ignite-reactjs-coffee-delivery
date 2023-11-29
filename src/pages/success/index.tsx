import OrderInfo from "./components/orderInfo";
import {
  SuccessContainer,
  SuccessDeliveryInformationContainer,
  SuccessDescription,
  SuccessTitle,
} from "./styles";

import Illustration from "../../assets/Illustration.png";

export default function SuccessPage() {
  return (
    <SuccessContainer>
      <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
      <SuccessDescription>
        Agora é só aguardar que logo o café chegará até você
      </SuccessDescription>

      <SuccessDeliveryInformationContainer>
        <OrderInfo />
        <img src={Illustration} alt="Delivery guy" />
      </SuccessDeliveryInformationContainer>
    </SuccessContainer>
  );
}

import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import HeaderForm from "../HeaderForm";
import {
  PaymentButton,
  PaymentOptionContainer,
  PaymentOptionFormContainer,
} from "./styles";
import { useTheme } from "styled-components";

export default function PaymentOptionForm() {
  const theme = useTheme();

  return (
    <PaymentOptionFormContainer>
      <HeaderForm
        icon={<CurrencyDollar size={22} color={theme["purple-800"]} />}
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <PaymentOptionContainer>
        <PaymentButton className={"selected"}>
          <CreditCard color={theme["purple-500"]} />
          Cartão de crédito
        </PaymentButton>
        <PaymentButton>
          <Bank color={theme["purple-500"]} />
          Cartão de débito
        </PaymentButton>
        <PaymentButton>
          <Money color={theme["purple-500"]} />
          Dinheiro
        </PaymentButton>
      </PaymentOptionContainer>
    </PaymentOptionFormContainer>
  );
}

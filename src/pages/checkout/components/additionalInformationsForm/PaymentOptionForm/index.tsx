import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import HeaderForm from "../HeaderForm";
import {
  PaymentButton,
  PaymentOptionContainer,
  PaymentOptionFormContainer,
} from "./styles";
import { useTheme } from "styled-components";
import IconButton from "../../../../../components/Buttons/IconButton";

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
        <IconButton className={`selected bigger`}>
          <CreditCard color={theme["purple-500"]} />
          Cartão de crédito
        </IconButton>
        <IconButton className="bigger">
          <Bank color={theme["purple-500"]} />
          Cartão de débito
        </IconButton>
        <IconButton className="bigger">
          <Money color={theme["purple-500"]} />
          Dinheiro
        </IconButton>
      </PaymentOptionContainer>
    </PaymentOptionFormContainer>
  );
}

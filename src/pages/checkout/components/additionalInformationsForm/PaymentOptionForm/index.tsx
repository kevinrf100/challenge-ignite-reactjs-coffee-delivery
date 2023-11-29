import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import HeaderForm from "../HeaderForm";
import { PaymentOptionContainer, PaymentOptionFormContainer } from "./styles";
import { useTheme } from "styled-components";
import IconButton from "../../../../../components/Buttons/IconButton";
import { useState } from "react";

export default function PaymentOptionForm() {
  const theme = useTheme();
  const [paymentOption, setPaymentOption] = useState<>();

  return (
    <PaymentOptionFormContainer>
      <HeaderForm
        icon={<CurrencyDollar size={22} color={theme["purple-800"]} />}
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <PaymentOptionContainer>
        <IconButton
          className={`${paymentOption === "credit" ? "selected" : ""} bigger`}
          onClick={(event) => {
            event.preventDefault();
            setPaymentOption("credit");
          }}
        >
          <CreditCard color={theme["purple-500"]} />
          Cartão de crédito
        </IconButton>
        <IconButton
          className={`${paymentOption === "debit" ? "selected" : ""} bigger`}
          onClick={(event) => {
            event.preventDefault();
            setPaymentOption("debit");
          }}
        >
          <Bank color={theme["purple-500"]} />
          Cartão de débito
        </IconButton>
        <IconButton
          className={`${paymentOption === "cash" ? "selected" : ""} bigger`}
          onClick={(event) => {
            event.preventDefault();
            setPaymentOption("cash");
          }}
        >
          <Money color={theme["purple-500"]} />
          Dinheiro
        </IconButton>
      </PaymentOptionContainer>
    </PaymentOptionFormContainer>
  );
}

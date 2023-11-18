import { CurrencyDollar } from "phosphor-react";
import HeaderForm from "../HeaderForm";
import { PaymentOptionFormContainer } from "./styles";
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
    </PaymentOptionFormContainer>
  );
}

import AddressForm from "./AddressForm";
import PaymentOptionForm from "./PaymentOptionForm";
import {
  AdditionalInformationFormContainer,
  AdditionalInformationTitle,
} from "./styles";

export default function AdditionalInformationForm() {
  return (
    <AdditionalInformationFormContainer>
      <AdditionalInformationTitle>
        Complete o seu pedido
      </AdditionalInformationTitle>
      <AddressForm></AddressForm>
      <PaymentOptionForm></PaymentOptionForm>
    </AdditionalInformationFormContainer>
  );
}

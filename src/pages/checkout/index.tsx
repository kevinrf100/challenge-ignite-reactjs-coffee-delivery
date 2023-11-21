import AdditionalInformationForm from "./components/additionalInformationsForm";
import Summary from "./components/summary";
import { CheckoutContainer } from "./styles";

export default function CheckoutPage() {
  return (
    <CheckoutContainer>
      <AdditionalInformationForm />
      <Summary />
    </CheckoutContainer>
  );
}

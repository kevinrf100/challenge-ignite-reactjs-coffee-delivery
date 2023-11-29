import { useNavigate } from "react-router-dom";
import AdditionalInformationForm from "./components/additionalInformationsForm";
import Summary from "./components/summary";
import { CheckoutContainer } from "./styles";

export default function CheckoutPage() {
  const navigate = useNavigate();
  function hanOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/success", { replace: true });
  }

  return (
    <CheckoutContainer onSubmit={hanOnSubmit}>
      <AdditionalInformationForm />
      <Summary />
    </CheckoutContainer>
  );
}

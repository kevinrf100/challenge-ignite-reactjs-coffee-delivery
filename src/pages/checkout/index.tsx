import { useNavigate } from "react-router-dom";
import AdditionalInformationForm from "./components/additionalInformationsForm";
import Summary from "./components/summary";
import { CheckoutContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export default function CheckoutPage() {
  const { cleanItems } = useContext(CartContext);

  const navigate = useNavigate();
  function hanOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    cleanItems();

    navigate("/success", { replace: true });
  }

  return (
    <CheckoutContainer onSubmit={hanOnSubmit}>
      <AdditionalInformationForm />
      <Summary />
    </CheckoutContainer>
  );
}

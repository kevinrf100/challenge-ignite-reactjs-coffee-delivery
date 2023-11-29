import { useContext } from "react";
import CoffeeItem from "./components/CoffeeItem";
import PriceReview from "./components/PriceReview";
import { SummaryContainer, SummaryContent, SummaryTitle } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

export default function Summary() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <SummaryContainer>
        <SummaryTitle>Cafés selecionados</SummaryTitle>
        <SummaryContent>
          {cartItems.map((coffee) => {
            return <CoffeeItem key={coffee.id} coffee={coffee} />;
          })}

          <PriceReview />
        </SummaryContent>
      </SummaryContainer>
    </>
  );
}

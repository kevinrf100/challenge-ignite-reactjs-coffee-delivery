import { useContext } from "react";
import { Button } from "../../../../../../components/button";
import {
  PriceReviewContainer,
  PriceReviewContent,
  PriceReviewTitle,
  PriceReviewTotalTitle,
  PriceReviewTotalValue,
  PriceReviewValue,
} from "./styles";
import { CartContext } from "../../../../../../contexts/CartContext";

export default function PriceReview() {
  const { cartItems } = useContext(CartContext);
  const deliveryPrice = 3.5;

  const totalItems = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.amount,
    0
  );
  const total = totalItems + deliveryPrice;

  const totalFormattedPrice = totalItems.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  const deliveryFormattedPrice = deliveryPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  const formattedTotal = total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return (
    <PriceReviewContainer>
      <PriceReviewContent>
        <PriceReviewTitle>Total de itens</PriceReviewTitle>
        <PriceReviewValue>R$ {totalFormattedPrice}</PriceReviewValue>
      </PriceReviewContent>
      <PriceReviewContent>
        <PriceReviewTitle>Entrega</PriceReviewTitle>
        <PriceReviewValue>R$ {deliveryFormattedPrice}</PriceReviewValue>
      </PriceReviewContent>
      <PriceReviewContent>
        <PriceReviewTotalTitle>Total</PriceReviewTotalTitle>
        <PriceReviewTotalValue>R$ {formattedTotal}</PriceReviewTotalValue>
      </PriceReviewContent>

      <Button type="submit" background="yellow-500" onClick={() => {}}>
        CONFIRMAR PEDIDO
      </Button>
    </PriceReviewContainer>
  );
}

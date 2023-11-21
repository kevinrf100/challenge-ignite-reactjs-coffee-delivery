import { Button } from "../../../../../../components/button";
import {
  PriceReviewContainer,
  PriceReviewContent,
  PriceReviewTitle,
  PriceReviewTotalTitle,
  PriceReviewTotalValue,
  PriceReviewValue,
} from "./styles";

export default function PriceReview() {
  return (
    <PriceReviewContainer>
      <PriceReviewContent>
        <PriceReviewTitle>Total de itens</PriceReviewTitle>
        <PriceReviewValue>1790.0</PriceReviewValue>
      </PriceReviewContent>
      <PriceReviewContent>
        <PriceReviewTitle>Entrega</PriceReviewTitle>
        <PriceReviewValue>1790.0</PriceReviewValue>
      </PriceReviewContent>
      <PriceReviewContent>
        <PriceReviewTotalTitle>Total</PriceReviewTotalTitle>
        <PriceReviewTotalValue>1790.0</PriceReviewTotalValue>
      </PriceReviewContent>

      <Button background="yellow-500" onClick={() => {}}>
        CONFIRMAR PEDIDO
      </Button>
    </PriceReviewContainer>
  );
}

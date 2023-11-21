import CoffeeItem from "./components/CoffeeItem";
import PriceReview from "./components/PriceReview";
import { SummaryContainer, SummaryContent, SummaryTitle } from "./styles";
import { v4 as uuid } from "uuid";

export default function Summary() {
  const coffee = [
    {
      id: uuid(),
      image: "/Coffees/Expressos/ExpressoTradicional.png",
      tags: ["tradicional"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/Expressos/ExpressoAmericano.png",
      tags: ["tradicional"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
    },
  ];

  return (
    <>
      <SummaryContainer>
        <SummaryTitle>Cafés selecionados</SummaryTitle>
        <SummaryContent>
          {coffee.map((coffee) => {
            return <CoffeeItem key={coffee.id} coffee={coffee} />;
          })}

          <PriceReview />
        </SummaryContent>
      </SummaryContainer>
    </>
  );
}

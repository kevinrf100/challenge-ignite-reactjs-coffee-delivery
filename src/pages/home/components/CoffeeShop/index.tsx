import { CoffeeCard } from "./components/CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeShopContainer,
  CoffeeShopContent,
} from "./styles";
import { v4 as uuid } from "uuid";

import expresso from "../../../../assets/Expresso.png";
import americano from "../../../../assets/Americano.png";
import expressoCremoso from "../../../../assets/Expresso Cremoso.png";

export function CoffeeShop() {
  const coffeeList = [
    {
      id: uuid(),
      image: expresso,
      tags: ["tradicional"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      id: uuid(),
      image: americano,
      tags: ["tradicional"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
    },
    {
      id: uuid(),
      image: expressoCremoso,
      tags: ["tradicional"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      id: uuid(),
      image: expresso,
      tags: ["tradicional", "gelado"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
  ];

  return (
    <CoffeeShopContainer>
      <CoffeeShopContent>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
        <CoffeeListContainer>
          {coffeeList.map((coffee) => (
            <CoffeeCard
              image={coffee.image}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
              key={coffee.id}
            />
          ))}
        </CoffeeListContainer>
      </CoffeeShopContent>
    </CoffeeShopContainer>
  );
}

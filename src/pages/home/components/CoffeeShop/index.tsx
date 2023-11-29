import { useEffect } from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeShopContainer,
  CoffeeShopContent,
} from "./styles";

export function CoffeeShop() {
  const coffeeList = [
    {
      id: "Coffee-Expresso-Tradicional",
      image: "/Coffees/Expressos/ExpressoTradicional.png",
      tags: ["tradicional"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      id: "Coffee-Expresso-Americano",
      image: "/Coffees/Expressos/ExpressoAmericano.png",
      tags: ["tradicional"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
    },
    {
      id: "Coffee-Expresso-Cremoso",
      image: "/Coffees/Expressos/ExpressoCremoso.png",
      tags: ["tradicional"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      id: "Coffee-Expresso",
      image: "/Coffees/Expressos/ExpressoGelado.png",
      tags: ["tradicional", "gelado"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
    {
      id: "Coffee-Café",
      image: "/Coffees/WithMilk/CafeComLeite.png",
      tags: ["tradicional", "com leite"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
    },
    {
      id: "Latte",
      image: "/Coffees/WithMilk/Latte.png",
      tags: ["tradicional", "com leite"],
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      id: "Capuccino",
      image: "/Coffees/WithMilk/Capuccino.png",
      tags: ["tradicional", "com leite"],
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      id: "Macchiato",
      image: "/Coffees/WithMilk/Macchiato.png",
      tags: ["tradicional", "com leite"],
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
    },
    {
      id: "Coffee-Mocaccino",
      image: "/Coffees/WithMilk/Mocaccino.png",
      tags: ["tradicional", "com leite"],
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      id: "Coffee-Chocolate",
      image: "/Coffees/WithMilk/ChocolateQuente.png",
      tags: ["especial", "com leite"],
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
    },
    {
      id: "Coffee-Cubano",
      image: "/Coffees/Expressos/ExpressoAmericano.png",
      tags: ["especial", "alcoólico", "gelado"],
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
    },
    {
      id: "Coffee-Havaiano",
      image: "/Coffees/Special/Havaiano.png",
      tags: ["especial"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
    },
    {
      id: "Coffee-Árabe",
      image: "/Coffees/Special/Arabe.png",
      tags: ["especial"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
    },
    {
      id: "Coffee-Irlandês",
      image: "/Coffees/Special/Irlandes.png",
      tags: ["especial"],
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
    },
  ];

  return (
    <CoffeeShopContainer>
      <CoffeeShopContent>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
        <CoffeeListContainer>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </CoffeeShopContent>
    </CoffeeShopContainer>
  );
}

import { CoffeeCard } from "./components/CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeShopContainer,
  CoffeeShopContent,
} from "./styles";
import { v4 as uuid } from "uuid";

export function CoffeeShop() {
  const coffeeList = [
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
    {
      id: uuid(),
      image: "/Coffees/Expressos/ExpressoCremoso.png",
      tags: ["tradicional"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/Expressos/ExpressoGelado.png",
      tags: ["tradicional", "gelado"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/WithMilk/CafeComLeite.png",
      tags: ["tradicional", "com leite"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/WithMilk/Latte.png",
      tags: ["tradicional", "com leite"],
      title: "Latte",
      description:
        "MUma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/WithMilk/Capuccino.png",
      tags: ["tradicional", "com leite"],
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/WithMilk/Macchiato.png",
      tags: ["tradicional", "com leite"],
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/WithMilk/Mocaccino.png",
      tags: ["tradicional", "com leite"],
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/WithMilk/ChocolateQuente.png",
      tags: ["especial", "com leite"],
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/Expressos/ExpressoAmericano.png",
      tags: ["especial", "alcoólico", "gelado"],
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/Special/Havaiano.png",
      tags: ["especial"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
    },
    {
      id: uuid(),
      image: "/Coffees/Special/Arabe.png",
      tags: ["especial"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
    },
    {
      id: uuid(),
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

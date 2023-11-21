import { CoffeeShop } from "./components/CoffeeShop";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeShop />
    </HomeContainer>
  );
}

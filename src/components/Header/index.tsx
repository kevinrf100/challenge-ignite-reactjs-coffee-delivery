import {
  ActionContainer,
  AddressButton,
  CartButton,
  HeaderContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "./../../assets/Logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery logo" />
      <ActionContainer>
        <AddressButton>
          <MapPin size={22} weight="fill" />
          São Carlos, SP
        </AddressButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ActionContainer>
    </HeaderContainer>
  );
}

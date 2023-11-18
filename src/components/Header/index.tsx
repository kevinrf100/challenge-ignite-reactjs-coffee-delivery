import {
  ActionContainer,
  AddressButton,
  CartButton,
  HeaderContainer,
  HeaderContentContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "./../../assets/Logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
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
      </HeaderContentContainer>
    </HeaderContainer>
  );
}

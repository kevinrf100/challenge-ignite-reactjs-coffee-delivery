import {
  ActionContainer,
  AddressButton,
  CartButton,
  HeaderContainer,
  HeaderContentContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "./../../assets/Logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <NavLink to="/">
          <img src={logo} alt="Coffee Delivery logo" />
        </NavLink>
        <ActionContainer>
          <AddressButton>
            <MapPin size={22} weight="fill" />
            São Carlos, SP
          </AddressButton>
          <NavLink to="/checkout">
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </ActionContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
}

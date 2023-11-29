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
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartItems } = useContext(CartContext);

  const cartSize = cartItems.length;

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
              {cartSize > 0 && <span>{cartSize}</span>}
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </ActionContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
}

import { createContext, useState } from "react";
import { Coffee } from "../pages/home/components/CoffeeShop/components/CoffeeCard";

export interface Item extends Coffee {
  amount: number;
}

interface CartContextType {
  cartItems: Item[];
  addItem: (coffee: Item) => void;
  cleanItems: () => void;
  removeItem: (coffee: Item) => void;
  modifyItem: (coffee: Item) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  function addItem(coffee: Item) {
    const itemAlreadyExists = cartItems.find((item) => item.id === coffee.id);

    if (!itemAlreadyExists) {
      setCartItems((state) => [...state, coffee]);
    } else {
      const newCartItems = cartItems.map((item) => {
        if (item.id === coffee.id) {
          return {
            ...item,
            amount: item.amount + coffee.amount,
          };
        }
        return { ...item };
      });
      setCartItems(newCartItems);
    }
  }

  function removeItem(coffee: Item) {
    setCartItems((coffeeCartItems) =>
      coffeeCartItems.filter((item) => item.id !== coffee.id)
    );
  }

  function modifyItem(coffee: Item) {
    setCartItems((coffeeCartItems) =>
      coffeeCartItems.map((item) => {
        if (item.id === coffee.id) {
          return {
            ...item,
            amount: coffee.amount,
          };
        }

        return { ...item };
      })
    );
  }

  function cleanItems() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, modifyItem, cleanItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

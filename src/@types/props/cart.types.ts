import { TCartItem } from "../interfaces/cart.types";

export type TCartItemProps = {
  cartItem: TCartItem;
  incrementHandler: (cartItem: TCartItem) => void;
  decrementHandler: (cartItem: TCartItem) => void;
  removeHandler: (id: string) => void;
};

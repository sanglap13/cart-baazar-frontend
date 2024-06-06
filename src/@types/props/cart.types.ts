import { TProductsProps } from "./product.types";

export type TCartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  //   handler: (cartItem: CartItem) => string | undefined;
  quantity: number;
};

export type TCartItemProps = {
  cartItem: TCartItem;
  incrementHandler: (cartItem: TCartItem) => void;
  decrementHandler: (cartItem: TCartItem) => void;
  removeHandler: (id: string) => void;
};

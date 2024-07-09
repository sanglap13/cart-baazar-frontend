import { TCartItem } from "../interfaces/cart.types";

export type TProductsProps = {
  productId: string;
  // photos: {
  //   url: string;
  //   public_id: string;
  // }[];
  photos: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: TCartItem) => string | undefined;
};

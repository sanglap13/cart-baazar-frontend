export type TProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  //   handler: (cartItem: CartItem) => string | undefined;
  handler: () => void;
};

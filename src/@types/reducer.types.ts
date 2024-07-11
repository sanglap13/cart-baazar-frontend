import { TCartItem } from "./interfaces/cart.types";
import { TShippingInfo } from "./interfaces/shipping.types";
import { TUser } from "./interfaces/user.types";

export interface IUserReducerInitialState {
  user: TUser | null;
  loading: boolean;
}

export interface ICartReducerInitialState {
  loading: boolean;
  cartItems: TCartItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  shippingInfo: TShippingInfo;
}

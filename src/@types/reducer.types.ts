import { TUser } from "./interfaces/user.types";

export interface IUserReducerInitialState {
  user: TUser | null;
  loading: boolean;
}

// export interface CartReducerInitialState {
//     loading: boolean;
//     cartItems: CartItem[];
//     subtotal: number;
//     tax: number;
//     shippingCharges: number;
//     discount: number;
//     total: number;
//     shippingInfo: ShippingInfo;
//   }

import { ReactElement } from "react";
import { TCartItem } from "./cart.types";
import { TShippingInfo } from "./shipping.types";

export type TableDataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

export type TOrderItem = Omit<TCartItem, "stock"> & { _id: string };

export type TOrder = {
  orderItems: TOrderItem[];
  shippingInfo: TShippingInfo;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};

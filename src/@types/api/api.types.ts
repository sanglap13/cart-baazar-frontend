import { TCartItem } from "../interfaces/cart.types";
import { TBar, TLine, TPie } from "../interfaces/charts.types";
import { TOrder } from "../interfaces/order.types";
import { TProduct } from "../interfaces/product.types";
import { TShippingInfo } from "../interfaces/shipping.types";
import { TStats } from "../interfaces/stats.types";
import { TUser } from "../interfaces/user.types";

export type TCustomError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

export type TMessageResponse = {
  success: boolean;
  message: string;
};
//=============================users============================
export type TUserResponse = {
  success: boolean;
  user: TUser;
};

export type TAllUsersResponse = {
  success: boolean;
  users: TUser[];
};

export type TDeleteUserRequest = {
  userId: string;
  adminUserId: string;
};

//=============================products============================
export type TAllProductsResponse = {
  success: boolean;
  products: TProduct[];
};

export type TNewProductRequest = {
  id: string;
  formData: FormData;
};

export type TProductResponse = {
  success: boolean;
  product: TProduct;
};

export type TUpdateProductRequest = {
  userId: string;
  productId: string;
  formData: FormData;
};

export type TDeleteProductRequest = {
  userId: string;
  productId: string;
};
// export type AllReviewsResponse = {
//   success: boolean;
//   reviews: Review[];
// };

export type TCategoriesResponse = {
  success: boolean;
  categories: string[];
};

// ===========================search=============================
export type TSearchProductsResponse = TAllProductsResponse & {
  totalPage: number;
};
export type TSearchProductsRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};

// ===========================orders=============================
export type TAllOrdersResponse = {
  success: boolean;
  orders: TOrder[];
};
export type TOrderDetailsResponse = {
  success: boolean;
  order: TOrder;
};

export type TUpdateOrderRequest = {
  userId: string;
  orderId: string;
};

export type TNewOrderRequest = {
  shippingInfo: TShippingInfo;
  orderItems: TCartItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: string;
};

// ===========================dashboard=============================
export type TStatsResponse = {
  success: boolean;
  stats: TStats;
};

export type TPieResponse = {
  success: boolean;
  charts: TPie;
};

export type TBarResponse = {
  success: boolean;
  charts: TBar;
};

export type TLineResponse = {
  success: boolean;
  charts: TLine;
};

// export type NewReviewRequest = {
//   rating: number;
//   comment: string;
//   userId?: string;
//   productId: string;
// };

// export type DeleteReviewRequest = {
//   userId?: string;
//   reviewId: string;
// };

// export type AllDiscountResponse = {
//   success: boolean;
//   coupons: CouponType[];
// };

// export type SingleDiscountResponse = {
//   success: boolean;
//   coupon: CouponType;
// };

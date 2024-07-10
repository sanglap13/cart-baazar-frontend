import { TProduct } from "../interfaces/product.types";
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

export type TUserResponse = {
  success: boolean;
  user: TUser;
};

// export type AllUsersResponse = {
//   success: boolean;
//   users: User[];
// };

// export type UserResponse = {
//   success: boolean;
//   user: User;
// };

//=============================products============================
export type TAllProductsResponse = {
  success: boolean;
  products: TProduct[];
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
// export type ProductResponse = {
//   success: boolean;
//   product: Product;
// };

// export type AllOrdersResponse = {
//   success: boolean;
//   orders: Order[];
// };
// export type OrderDetailsResponse = {
//   success: boolean;
//   order: Order;
// };

// export type StatsResponse = {
//   success: boolean;
//   stats: Stats;
// };

// export type PieResponse = {
//   success: boolean;
//   charts: Pie;
// };

// export type BarResponse = {
//   success: boolean;
//   charts: Bar;
// };

// export type LineResponse = {
//   success: boolean;
//   charts: Line;
// };

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

// export type NewProductRequest = {
//   id: string;
//   formData: FormData;
// };

// export type UpdateProductRequest = {
//   userId: string;
//   productId: string;
//   formData: FormData;
// };
// export type DeleteProductRequest = {
//   userId: string;
//   productId: string;
// };

// export type NewOrderRequest = {
//   shippingInfo: ShippingInfo;
//   orderItems: CartItem[];
//   subtotal: number;
//   tax: number;
//   shippingCharges: number;
//   discount: number;
//   total: number;
//   user: string;
// };

// export type UpdateOrderRequest = {
//   userId: string;
//   orderId: string;
// };

// export type DeleteUserRequest = {
//   userId: string;
//   adminUserId: string;
// };

// export type AllDiscountResponse = {
//   success: boolean;
//   coupons: CouponType[];
// };

// export type SingleDiscountResponse = {
//   success: boolean;
//   coupon: CouponType;
// };

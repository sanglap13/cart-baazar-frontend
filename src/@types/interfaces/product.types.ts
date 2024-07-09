export type TProduct = {
  name: string;
  price: number;
  stock: number;
  category: string;
  ratings: number;
  numOfReviews: number;
  description: string;
  photos: {
    url: string;
    public_id: string;
  }[];
  _id: string;
};

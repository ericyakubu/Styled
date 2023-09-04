export interface ProductsType {
  id: string;
  name: string;
  category: string[];
  sizes: string[];
  sizesShoes: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  priceDiscount: number;
  description: string;
  discount: number;
  images: string[];
  imageCover: string;
  slug: string;
  link?: string;
}

export interface ProductType extends ProductsType {
  reviews: ReviewType[];
}

export interface LandingSaleLinkType {
  id?: string;
  name: string;
  link: string;
  imageCover: string;
}

export interface ReviewType {
  review: string;
  rating: number;
  product: string;
  user: {
    name: string;
  };
}

export interface CartItemType {
  id: string;
  imageCover: string;
  name: string;
  price: number;
  quantity: number;
  size: string | number;
}
export interface UserType {
  name: string;
  role: string;
  email: string;
  photo: string;
}

export interface SortCategoriesType {
  [key: string]: { [key: string]: string };
}

export interface filterType {
  name: string;
  categories: string[];
  sizes: string[];
  prices: {
    min: number | null;
    max: number | null;
  };
}

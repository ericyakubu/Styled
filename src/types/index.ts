export interface ProductsType {
  id: string;
  name: string;
  category: string[];
  sizes: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
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
  size: string;
}

export interface UserType {
  name: string;
  role: string;
  email: string;
  photo: string;
}

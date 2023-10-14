import { SortCategoriesType } from "./types";

export const Sizes: string[] = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

export const SizesShoes: number[] = [
  5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13,
  13.5, 14, 14.5, 15,
];

export const Categories: string[] = [
  "dresses",
  "shirts",
  "hoodies & sweatshirts",
  "sweaters",
  "coats & jackets",
  "jeans",
  "pants",
  "activewear",
  "swimwear",
  "suits",
  "boots",
  "sneakers",
  "heels",
  "accessories",
].sort();

export const VideoUrl: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/hero%20videos%2Fvideo1.webm?alt=media&token=0bbecf75-a3a1-4954-a02a-0215256fa2cb",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/hero%20videos%2Fvideo2.webm?alt=media&token=171ca54e-3eb7-4173-837d-c3932d5849a9",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/hero%20videos%2Fvideo3.webm?alt=media&token=323b36ac-f746-4e2d-8f3f-90a675eee0dc",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/hero%20videos%2Fvideo4.webm?alt=media&token=9c91cb35-e765-4d09-b875-1f1b03bf62d9",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/hero%20videos%2Fvideo5.webm?alt=media&token=d853f2c7-090d-4359-96ea-190d963e7475",
];

export const SocialLinks: { [key: string]: string } = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  pinterest: "https://pinterest.com",
  instagram: "https://instagram.com",
  vk: "https://vk.com",
};

export const FilterCategories: { [key: string]: string } = {
  PRICE: "price",
  CATEGORY: "category",
  SIZE: "size",
};

export const SortCategories: SortCategoriesType = {
  SORT_BY: {
    name: "Sort by",
    value: "",
  },
  NEWEST: {
    name: "Newest",
    value: "createdAt",
  },
  OLDEST: {
    name: "Oldest",
    value: "-createdAt",
  },
  PRICE_LOW_TO_HIGH: {
    name: "Price (low-high)",
    value: "price",
  },
  PRICE_HIGH_TO_LOW: {
    name: "Price (high-low)",
    value: "-price",
  },
  NAME_A_TO_Z: {
    name: "Name (A-Z)",
    value: "name",
  },
  NAME_Z_TO_A: {
    name: "Name (Z-A)",
    value: "-name",
  },
};

export const ValidationErrs = {
  email: {
    noEntry: "Please enter your email",
    badEntry: "Please enter a valid email",
  },
  password: {
    noEntry: "Please enter your password",
    badEntry: "Password must consist of more than 8 characters",
    noMatch: `Passwords you entered don't match`,
  },
};

export const UserModalOpts = {
  LOGIN: "login",
  SIGNUP: "signup",
  FORGOT: "forgot",
};

export const Purchases = [
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
  {
    products: "sweater",
    purchaseDate: Date.now(),
    price: 1000.54,
    estDelivery: "Monday some month and year",
  },
];

export const SALE_OFFER_IMG: string =
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/pexels-max-fischer-5872347.jpg?alt=media&token=872c4667-8660-44d1-9a47-5ec4a8f1b2d9";

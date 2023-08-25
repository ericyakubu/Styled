export const Sizes: string[] = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
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
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/styled-users%2Fvideo1.mp4?alt=media&token=cfcb1b9b-e6df-44fc-9631-4fe330ef4563",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/styled-users%2Fvideo2.mp4?alt=media&token=7ffafe50-3f84-48ad-be83-5af111dbc0bd",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/styled-users%2Fvideo3.mp4?alt=media&token=8c9a8f7b-788d-4340-a748-fc3a12713def",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/styled-users%2Fvideo4.mp4?alt=media&token=be14c3c1-4d33-45e2-82af-4bfc09719045",
  "https://firebasestorage.googleapis.com/v0/b/memories-app-350418.appspot.com/o/styled-users%2Fvideo5.mp4?alt=media&token=2a334b1c-5f7a-4139-812c-c97293c26981",
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

export const SortCategories: { [key: string]: string } = {
  SORT_BY: "Sort by",
  NEWEST: "Newest",
  PRICE_LOW_TO_HIGH: "Price (low-high)",
  PRICE_HIGH_TO_LOW: "Price (high-low)",
  NAME_A_TO_Z: "Name (A-Z)",
  NAME_Z_TO_A: "Name (Z-A)",
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

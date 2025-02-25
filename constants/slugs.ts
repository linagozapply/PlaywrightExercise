export const SLUGS = {
  HOME: "/",
  CART: "/cart",
  CHECKOUT: "/checkout",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PRODUCTS: "/products",
  PRODUCT: (id: string) => `/product/${id}`, // Dynamic product slug
};

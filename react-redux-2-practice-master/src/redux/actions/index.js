import * as actionTypes from "../constants/actionTypes";
import shop from "../../api/shop";

const receiveProducts = (products) => ({
  type: actionTypes.RECEIVE_PRODUCTS,
  payload: { products },
});

export const getProductsFromApi = () => (dispatch) => {
  dispatch(receiveProducts(shop.getProducts()));
};

export const incrementQuantity = (productId) => ({
  type: actionTypes.INCREMENT_QUANTITY,
  payload: { productId },
});

export const decrementQuantity = (productId) => ({
  type: actionTypes.DECREMENT_QUANTITY,
  payload: { productId },
});

export const addToWishlist = (productId) => ({
  type: actionTypes.ADD_TO_WISHLIST,
  payload: { productId },
});

export const removeFromWishlist = (productId) => ({
  type: actionTypes.REMOVE_FROM_WISHLIST,
  payload: { productId },
});

export const addToCart = (productId, quantity) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { productId, quantity },
});

export const removeFromCart = (productId) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: { productId },
});

export const checkout = (allProductsId) => ({
  type: actionTypes.CHECKOUT,
  payload: { allProductsId },
});

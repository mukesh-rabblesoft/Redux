import ActionTypes from "../Contents/ActionType";

const setProduct = (products) => {
  return {
    type: ActionTypes.Set_Products,
    payload: products,
  };
};

const selectProduct = (product) => {
  return {
    type: ActionTypes.Select_Product,
    payload: product,
  };
};

export { setProduct, selectProduct };

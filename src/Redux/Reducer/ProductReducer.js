import ActionTypes from "../Contents/ActionType";

const initialState = {
  products: [],
};

const productStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Set_Products:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

const selectProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.Select_Product:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export { productStore, selectProductReducer };

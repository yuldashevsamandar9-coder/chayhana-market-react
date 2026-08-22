import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../lib/types/screen";

const initialState: ProductsPageState = {
  shopdukon: null,
  chosenProduct: null,
  products: [],
};

const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setShopDukon: (state, action) => {
      state.shopdukon = action.payload;
    },

    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  setShopDukon: setShopDukon,
  setChosenProduct,
  setProducts,
} = productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;

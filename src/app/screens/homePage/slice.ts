import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";

const initialState: HomePageState = {
  popularMenu: [],
  newMenu: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularMenu: (state, action: PayloadAction<Product[]>) => {
      state.popularMenu = action.payload;
    },
    setNewMenu: (state, action: PayloadAction<Product[]>) => {
      state.newMenu = action.payload;
    },
    setTopUsers: (state, action: PayloadAction<Member[]>) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularMenu, setNewMenu, setTopUsers } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;

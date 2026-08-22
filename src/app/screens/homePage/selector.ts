import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import HomePage from ".";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularMenu = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularMenu,
);

export const retrieveNewMenu = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newMenu,
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers,
);

// slice =>
// selector <=

import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewMenu from "./NewMenu";
import PopularMenu from "./PopularMenu";
import Statistics from "./Statistics";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewMenu, setPopularMenu, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { Member } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularMenu: (data: Product[]) => dispatch(setPopularMenu(data)),
  setNewMenu: (data: Product[]) => dispatch(setNewMenu(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {
  // selector: Data => Store
  const { setPopularMenu, setNewMenu, setTopUsers } =
    actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();

    /** popularMenu start */
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DRINKS,
      })
      .then((data) => {
        setPopularMenu(data);
      })
      .catch((err) => console.log(err));

    /** newMenu start */
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        productCollection: ProductCollection.GROCERIES,
      })
      .then((data) => {
        setNewMenu(data);
      })
      .catch((err) => console.log(err));

    /** TOPUSERS START */
    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => setTopUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularMenu />
      <NewMenu />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}

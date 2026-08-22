import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/**. REACT APP STATE     * */
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

/**  HOMEPAGE   **/
export interface HomePageState {
  popularMenu: Product[];
  newMenu: Product[];
  topUsers: Member[];
}

/**  PRODUCTS PAGE   **/
export interface ProductsPageState {
  shopdukon: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/**  ORDER PAGE  **/
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}

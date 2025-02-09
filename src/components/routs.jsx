import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./srote";
import Admin from "./admin";
import CashRegister from "./cashRegister";
import ShoppingCart from "./shoppingCart";
import Adding from "./adding";
import Updating from "./updating";
import MainPage from "./mainPage";
import { loaderHandelr } from "../handllers/loaderHandllers/updateLoaders";
import { addingAction } from "../handllers/actionHandllers/addingActions";
import { useRef } from "react";
import { productsData } from "../data/productData";

export default function Routs() {
  let refProductsData = useRef(productsData);
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          element: <Store></Store>,
          index: true,
          loader: () => {
            return refProductsData.current === undefined || refProductsData.current.length > 0
              ? refProductsData.current
              : undefined;
          },
        },
        {
          path: "/admin",
          element: <Admin></Admin>,
          children: [
            {
              element: <Adding></Adding>,
              index: true,
              action: addingAction,
            },
            {
              path: "updating/:productCode",
              element: <Updating></Updating>,
              loader: loaderHandelr,
            },
          ],
        },
        {
          path: "cashRegister",
          element: <CashRegister></CashRegister>,
        },
        {
          path: "shoppingCart",
          element: <ShoppingCart></ShoppingCart>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routs}></RouterProvider>
    </>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./srote";
import Admin from "./admin";
import CashRegister from "./cashRegister";
import ShopingCart from "./shopingCart";
import Adding from "./adding";
import Updating from "./updating";
import MainPage from "./mainPage";

export default function Routs() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          element: <Store></Store>,
          index: true,
        },
        {
          path: "/admin",
          element: <Admin></Admin>,
          // children: [
          //   {
          //     element: <Adding></Adding>,
          //     index: true,
          //   },
          //   {
          //     path: "/updating",
          //     element: <Updating></Updating>,
          //   },
          // ],
        },
        {
          path: "/cashRegister",
          element: <CashRegister></CashRegister>,
        },
        {
          path: "/shopingCart",
          element: <ShopingCart></ShopingCart>,
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

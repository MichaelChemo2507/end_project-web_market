import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./srote";
import Admin from "./admin";
import CashRegister from "./cashRegister";
import ShoppingCart from "./shoppingCart";
import Adding from "./adding";
import Updating from "./updating";
import MainPage from "./mainPage";
import { useRef, useState } from "react";
import { productsData } from "../data/productData";

export default function Routs() {
  let refProductsData = useRef(productsData);
  let [productCode, setProductCode] = useState();
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          element: <Store></Store>,
          index: true,
          loader: () => {
            return refProductsData.current === undefined ||
              refProductsData.current.length > 0
              ? refProductsData.current
              : undefined;
          },
        },
        {
          path: "/admin",
          element: (
            <Admin productCodeState={[productCode, setProductCode]}></Admin>
          ),
          children: [
            {
              element: <Adding></Adding>,
              index: true,
              action: async ({ request }) => {
                let obj = Object.fromEntries(await request.formData());
                if (obj) refProductsData.current.push(obj);
              },
            },
            {
              path: "updating/:productCode?",
              element: (
                <Updating
                  productCodeState={[productCode, setProductCode]}
                ></Updating>
              ),
              loader: ({ params }) => {
                if (params.productCode !== undefined) {
                  let product = refProductsData.current.filter((obj) => {
                    return obj.productCode === params.productCode;
                  });
                  if (product.length > 0) return product;
                }
                return undefined;
              },
              action: async ({ request }) => {
                let obj = Object.fromEntries(await request.formData());
                if (obj) {
                  refProductsData.current = refProductsData.current.map(
                    (product) => {
                      if (product.productCode === obj.productCode) {
                        Object.keys(product).map((key) => {
                          product[key] = obj[key];
                        });
                      }
                      return product;
                    }
                  );
                }
              },
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

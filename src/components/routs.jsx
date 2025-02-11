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
import { productsCartContext } from "../contexts/contextCreator";
import { shoppingCartData } from "../data/shoppingCartData";

export default function Routs() {
  let refProductsData = useRef(productsData);
  let priceCalc = useRef(0);
  let orderData = useRef([]);
  let [productCode, setProductCode] = useState();
  let [cartProducts, setCartProducts] = useState();
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
                          return 0;
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
          element: <CashRegister refPriceCalc={priceCalc}></CashRegister>,
          action: async ({ request }) => {
            let obj = Object.fromEntries(await request.formData());
            let objProductsCart = JSON.parse(obj.productsCart);
            if (obj) {
              let productsCode = objProductsCart.map((product) => {
                return product.productCode;
              });
              orderData.current.push({
                productsCode: [...productsCode],
                totalPrice: priceCalc.current,
                orderLocation: obj.location,
                ID: obj.id,
              });
            }
            console.log(orderData.current);
          },
        },
        {
          path: "shoppingCart",
          element: <ShoppingCart refPriceCalc={priceCalc}></ShoppingCart>,
        },
      ],
    },
  ]);
  return (
    <>
      <productsCartContext.Provider value={[cartProducts, setCartProducts]}>
        <RouterProvider router={routs}></RouterProvider>
      </productsCartContext.Provider>
    </>
  );
}

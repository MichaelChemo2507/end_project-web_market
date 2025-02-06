import { Link, Outlet } from "react-router-dom";
import "../css/mainPage.css";
import { productsCartContext } from "../contexts/contextCreator";
import { priceCalcContext } from "../contexts/contextCreator";
import { shoppingCartData } from "../data/shoppingCartData";
import { useRef, useState } from "react";
export default function MainPage() {
  let [cartProducts, setCartProducts] = useState(shoppingCartData);
  let priceCalc = useRef(0);
  return (
    <>
      <div className="wrapper">
        <header>
          <Link to="/admin" className="navBarLinks">
            כניסת מנהל
          </Link>
          <Link to="/" className="navBarLinks">
            דף הבית
          </Link>
          <Link to="/shoppingCart" className="navBarLinks">
            סל קניות
          </Link>
        </header>
        <priceCalcContext.Provider value={priceCalc}>
          <productsCartContext.Provider value={[cartProducts, setCartProducts]}>
            <div className="mainSection">
              <Outlet></Outlet>
            </div>
          </productsCartContext.Provider>
        </priceCalcContext.Provider>
        <footer></footer>
      </div>
    </>
  );
}

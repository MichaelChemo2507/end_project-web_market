import { Link } from "react-router-dom";
import CreateTable from "./createTable";
import "../css/shoppingCart.css";
import { priceCalcContext, productsCartContext } from "../contexts/contextCreator";
import { useContext } from "react";
export default function ShopingCart() {
  let productsCart = useContext(productsCartContext);
  let priceCalc = useContext(priceCalcContext);
  priceCalc.current = 0;
  if (productsCart[0].length > 0) {
    productsCart[0].forEach((product) => {
      priceCalc.current += product.price;
    });
  }
  return (
    <>
      <div className="CartMainSection">
        <div className="tableSection">
          {productsCart[0].length > 0 ? (
            <CreateTable></CreateTable>
          ) : (
            <h1>אין פריטים בעגלה</h1>
          )}
        </div>
        <div className="underTableSection">
          <hr />
          <h3>{priceCalc.current.toFixed(2)} - סהכ </h3>
          <Link className="linkToRegister" to="/cashRegister">
            מעבר לקופה
          </Link>
        </div>
      </div>
    </>
  );
}

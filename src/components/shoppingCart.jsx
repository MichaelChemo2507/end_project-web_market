import { Link } from "react-router-dom";
import CreateTable from "./createTable";
import "../css/shoppingCart.css";;
export default function ShopingCart({priceCalc,cartProductsState}) {
  priceCalc.current = 0;
  if (cartProductsState[0].length > 0) {
    cartProductsState[0].forEach((product) => {
      priceCalc.current += product.price;
    });
  }
  return (
    <>
      <div className="CartMainSection">
        <div className="tableSection">
          {cartProductsState[0].length > 0 ? (
            <CreateTable></CreateTable>
          ) : (
            <h1>אין פריטים בעגלה</h1>
          )}
        </div>
        <div className="underTableSection">
          <hr />
          <h3>{priceCalc.current} - סהכ </h3>
          <Link className="linkToRegister" to="/cashRegister">
            מעבר לקופה
          </Link>
        </div>
      </div>
    </>
  );
}

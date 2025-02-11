import { Link } from "react-router-dom";
import CreateTable from "./createTable";
import "../css/shoppingCart.css";
import { productsCartContext } from "../contexts/contextCreator";
import { useContext } from "react";
export default function ShopingCart({refPriceCalc}) {
  let productsCart = useContext(productsCartContext);
  refPriceCalc.current = 0;
  if (productsCart[0].length > 0) {
    productsCart[0].forEach((product) => {
      refPriceCalc.current += Number(product.price);

    });
  }
  return (
    <>
      <div className="CartMainSection">
        <div className="tableSection">

          {productsCart[0].length > 0 ? (
            <CreateTable productsCart={productsCart} removeOption={true}></CreateTable>

          ) : (
            <h1>אין פריטים בעגלה</h1>
          )}
        </div>
        <div className="underTableSection">
          <hr />

          <h3 style={{marginTop:'20px'}}>{refPriceCalc.current.toFixed(2)} - סהכ </h3>

          <Link className="linkToRegister" to="/cashRegister">
            מעבר לקופה
          </Link>
        </div>
      </div>
    </>
  );
}

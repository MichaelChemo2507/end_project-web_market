import { Link } from "react-router-dom";
import CreateTable from "./createTable";
import "../css/shoppingCart.css";
import { productsCartContext } from "../contexts/contextCreator";
import { useContext } from "react";
export default function ShopingCart() {
  let productsCart = useContext(productsCartContext);
  return (
    <>
      <div className="CartMainSection">
        {(productsCart[0].length > 0)?<CreateTable></CreateTable>: <h1>אין פריטים בעגלה</h1>}
        <h3>{} - סהכ </h3>
        <Link to="/cashRegister"> מעבר לקופה </Link>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import '../css/shoppingCart'
import CreateTable from "./createTable";

export default function ShopingCart() {
    return (<>
        <CreateTable></CreateTable>
        <hr></hr>
        <h3>{ } - סהכ </h3>
        <Link to="/cashRegister"> מעבר לקופה </Link>
    </>)
}
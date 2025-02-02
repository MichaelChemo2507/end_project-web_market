import { Link, Outlet } from "react-router-dom";
import Header from "./header";

export default function MainPage() {
    return (<>
        <Header>
            <Link to='/admin' className="navBarLinks"> כניסת מנהל </Link>
            <Link to='/store' className="navBarLinks"> דף הבית </Link>
            <Link to='/shopingCart' className="navBarLinks"> סל קניות </Link>
        </Header>   
        <div className="mainSection">
            <Outlet></Outlet>
        </div>
    </>)
}
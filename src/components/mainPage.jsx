import { Link, Outlet } from "react-router-dom";

export default function MainPage() {
    return (<>
        <header>
            <Link to='/admin' className="navBarLinks"> כניסת מנהל </Link>
            <Link to='/' className="navBarLinks"> דף הבית </Link>
            <Link to='/shopingCart' className="navBarLinks"> סל קניות </Link>
        </header>   
        <div className="mainSection">
            <Outlet></Outlet>
        </div>
    </>)
}
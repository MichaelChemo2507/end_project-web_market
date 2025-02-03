import { Link, Outlet } from "react-router-dom";
import "../css/mainPage.css";

export default function MainPage() {
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
          <Link to="/shopingCart" className="navBarLinks">
            סל קניות
          </Link>
        </header>
        <div className="mainSection">
          <Outlet></Outlet>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

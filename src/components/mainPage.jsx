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
          <Link to="/shoppingCart" className="navBarLinks">
            סל קניות
          </Link>
        </header>

          <Outlet></Outlet>

        <footer></footer>
      </div>
    </>
  );
}

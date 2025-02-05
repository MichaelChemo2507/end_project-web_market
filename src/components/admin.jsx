import { Form, Link, Outlet } from "react-router-dom";
import "../css/admin.css";
export default function Admin() {
  return (
    <>
      <div className="mainAdminSection">
        <div className="inputSection">
          <Outlet></Outlet>
        </div>
        <div className="adminBtnSelection">
          <Link className="links" to="/admin">
            הוסף
          </Link>
          <div className="links">
            <input type="text" name="productCode" placeholder=" ...קוד מוצר" />
            <Link className="editLink" to="updating">עדכן</Link>
          </div>
        </div>
      </div>
    </>
  );
}

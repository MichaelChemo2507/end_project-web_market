import { Form, Link, Outlet } from "react-router-dom";
import "../css/admin.css";
export default function Admin() {
  return (
    <>
      <div className="mainAdminSection">
        <div className="adminBtnSelection">
          <Link className="links" to="/admin">
            הוסף
          </Link>
          <Form className="links">
            <input type="text" name="productCode" placeholder=" ...קוד מוצר" />
            <button>עדכן</button>
          </Form>
        </div>
        <div className="inputSection">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

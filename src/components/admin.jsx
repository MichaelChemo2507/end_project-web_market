import { Form, Link, Outlet } from "react-router-dom";
import "../css/admin.css";
import { useState } from "react";
export default function Admin() {
  let [productCode, setProductCode] = useState();
  return (
    <>
      <div className="mainAdminSection">
        <div className="inputSection">
          <Outlet></Outlet>
        </div>
        <div className="adminBtnSelection">
          <Link className="links" to={`/admin/${productCode}`}>
            הוסף
          </Link>
          <div className="links">
            <input
              type="text"
              name="productCode"
              placeholder=" ...קוד מוצר"
              onChange={(e) => {
                setProductCode(e.target.value);
              }}
            />
            <Link className="editLink" to="updating">
              עדכן
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

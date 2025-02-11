import { Link, Outlet } from "react-router-dom";
import "../css/admin.css";
export default function Admin({productCodeState}) {
  return (
    <>
      <div className="mainAdminSection">
        <div className="inputSection">
          <Outlet></Outlet>
        </div>
        <div className="adminBtnSelection">
          <Link className="links" to='/admin'>
            הוסף
          </Link>
          <div className="links">
            <input
              type="text"
              name="productCode"
              placeholder=" ...קוד מוצר"
              onBlur={(e) => {
                productCodeState[1](e.target.value);
              }}
            />
            <Link className="editLink" to={`updating/${productCodeState[0]}`}>
              עדכן
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

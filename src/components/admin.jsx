import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="adminBtnSelection">
        <div className="addBtn">
          <Link to="/admin">הוסף</Link>
        </div>
        <div className="updateBtn">
          <Link to="/update">עדכן</Link>
          <input type="text" name="productCode" placeholder=" ...קוד מוצר" />
        </div>
      </div>
      <div className="inputSection">
        <Outlet></Outlet>
      </div>
    </>
  );
}

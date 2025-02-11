import { useContext } from "react";
import { Form } from "react-router-dom";
import { productsCartContext } from "../contexts/contextCreator";
import CreateTable from "./createTable";

export default function CashRegister({ refPriceCalc }) {
  let productsCart = useContext(productsCartContext);
  return (
    <>
      <div className="CartMainSection">
        <div className="tableSection">
          {productsCart[0].length > 0 ? (
            <CreateTable
              productsCart={productsCart}
              removeOption={false}
            ></CreateTable>
          ) : (
            <h1>אין פריטים בעגלה</h1>
          )}
        </div>
        <div className="underTableSection" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <hr />
          <Form method="post" className="Form" style={{ padding: '20px' }}>
            <input type="text" name="id" placeholder=" ...ת.ז " />
            <input type="text" name="location" placeholder=" ...מיקום למשלוח" />
            <h3>{refPriceCalc.current.toFixed(2)} - סהכ </h3>
            <button> תשלום </button>
          </Form>
        </div>
      </div>
    </>
  );
}

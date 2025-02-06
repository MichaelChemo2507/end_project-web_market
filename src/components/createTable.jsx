import { productsCartContext } from "../contexts/contextCreator";
import { useContext } from "react";
export default function CreateTable() {
  let productsCartState = useContext(productsCartContext);
  const tableHeaders = Object.keys(productsCartState[0][0]).map((key) => {
    return <th>{key}</th>;
  });
  const tableBoxes = productsCartState[0].map((product) => {
    return (
      <tr>
        {Object.values(product).map((value) => {
          return <td>{value}</td>;
        })}
        <td
          onClick={() => {
            productsCartState[0].splice(productsCartState[0].indexOf(product), 1);
            productsCartState[1]([...productsCartState[0]]);
          }}
        >
          הסר
        </td>
      </tr>
    );
  });
  
  return (
    <>
      
        <h2> עגלת קניות </h2>

        <table>
          <tr>{tableHeaders}</tr>
          {tableBoxes}
        </table>
    </>
  );
}

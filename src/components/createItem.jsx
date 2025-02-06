import { get_URL } from "../utils/getImageUrl";
import { createItemClick } from "../handllers/clickHandllers/createItemClicks";
import { useContext } from "react";
import { productsCartContext } from "../contexts/contextCreator";
export default function CreateItem({ product }) {
  let productsCartState = useContext(productsCartContext);
  return (
    <>
      <div className="item">
        <img src={get_URL(product.photoUrl)} />
        <div>{product.productCode}</div>
        <div className="description">{product.description}</div>
        <div>{product.price}</div>
        <button
          onClick={() => {
            createItemClick(product,productsCartState);
          }}
        >
          הוסף לסל
        </button>
      </div>
    </>
  );
}

import { get_URL } from "../utils/getImageUrl";
import { useContext } from "react";
import { productsCartContext } from "../contexts/contextCreator";
export default function CreateItem({ product }) {
  let productsCartState = useContext(productsCartContext);
  return (
    <>
      <div className="item">
        <img alt="product" src={get_URL(product.photoUrl)} />
        <div>{product.productCode}</div>
        <div className="description">{product.description}</div>
        <div>{product.price}</div>
        <button
          onClick={() => {
            productsCartState[1]([...productsCartState[0], product]);
          }}
        >
          הוסף לסל
        </button>
      </div>
    </>
  );
}

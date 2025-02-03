import { get_URL } from "../utils/getImageUrl";
import { createItemClick } from "../handllers/clickHandllers";
export default function CreateItem({ product }) {
  return (
    <>
      <div className="item">
        <img src={get_URL(product.photoUrl)} />
        <div>{product.productCode}</div>
        <div className="description">{product.description}</div>
        <div>{product.price}</div>
        <button
          onClick={() => {
            createItemClick(product);
          }}
        >
          הוסף לסל
        </button>
      </div>
    </>
  );
}

import "../css/store.css";
import { productsData } from "../data/productData";
import CreateItem from "./createItem";
export default function Store() {
  let items = productsData.map((product) => {
    return <CreateItem product={product}></CreateItem>;
  });
  return (
    <>
      <div className="StoreMainSection">{items}</div>
    </>
  );
}

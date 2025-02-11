import { useLoaderData } from "react-router-dom";
import "../css/store.css";
import CreateItem from "./createItem";
export default function Store() {
  let refProductsData = useLoaderData();
  let items;
  if (refProductsData) { 
  items = refProductsData.map((product) => {
    return <CreateItem product={product}></CreateItem>;
  });
 }
  return (
    <>
      <div className="StoreMainSection">{refProductsData?items:<h2>אין פריטים בחנות</h2>}</div>
    </>
  );
}

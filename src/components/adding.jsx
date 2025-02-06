import { Form, useActionData } from "react-router-dom";
import { productsData } from "../data/productData";
export default function Adding() {
  let product = useActionData();
  console.log(product);
  if (product) productsData.push(product);
  console.log(productsData);
  return (
    <>
      <Form className="addingForm" method="post">
        <input type="text" name="productCode" placeholder="Product code..." />
        <input type="text" name="photoUrl" placeholder="Url image..." />
        <input type="text" name="description" placeholder="Description..." />
        <input type="text" name="price" placeholder="Price..." />
        <button> הוסף </button>
      </Form>
    </>
  );
}

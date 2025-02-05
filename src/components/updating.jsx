import { Form, useLoaderData } from "react-router-dom";
export default function Updating() {
  let product = useLoaderData();
  console.log(product);

  return (
    <>
      <Form className="addingForm">
        <input type="text" name="photoUrl" value={product[0].photoUrl} />
        <input type="text" name="description" value={product[0].description} />
        <input type="text" name="price" value={product[0].price} />
        <button> עדכן </button>
      </Form>
    </>
  );
}

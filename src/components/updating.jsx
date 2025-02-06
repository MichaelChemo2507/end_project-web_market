import { Form, useLoaderData } from "react-router-dom";
export default function Updating() {
  let product = useLoaderData();
  return (
    <>
      <Form className="addingForm">
        <input type="text" name="photoUrl" value={product&&product[0].photoUrl} placeholder="Url photo..."/>
        <input type="text" name="description" value={product&&product[0].description} placeholder="description..."/>
        <input type="text" name="price" value={product&&product[0].price} placeholder="price..."/>
        <button> עדכן </button>
      </Form>
    </>
  );
}

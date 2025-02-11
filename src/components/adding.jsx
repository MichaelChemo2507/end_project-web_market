import { Form } from "react-router-dom";
export default function Adding() {
  return (
    <>
      <Form className="Form" method="post">
        <input type="text" name="productCode" placeholder="Product code..." />
        <input type="text" name="photoUrl" placeholder="Url image..." />
        <input type="text" name="description" placeholder="Description..." />
        <input type="text" name="price" placeholder="Price..." />
        <button> הוסף </button>
      </Form>
    </>
  );
}

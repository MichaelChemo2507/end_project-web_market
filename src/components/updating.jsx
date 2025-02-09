import { Form, useLoaderData, useNavigate } from "react-router-dom";
export default function Updating({productCodeState}) {
  let product = useLoaderData();
  console.log(product);
  
  let navigate = useNavigate();
  return (
    <>
      <Form className="addingForm" method="post">
            <div className="searchBar">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate({
                    pathname: `/admin/updating/${productCodeState[0]}`,
                  });
                }}
              >
                חיפוש
              </button>
              <input
                type="text"
                name="productCode"
                placeholder=" ...קוד מוצר"
                defaultValue={productCodeState[0]}
                onBlur={(e) => {
                  productCodeState[1](e.target.value);
                }}
              />
            </div>
        <input
          type="text"
          name="photoUrl"
          defaultValue={product && product[0].photoUrl}
          placeholder="Url photo..."
        />
        <input
          type="text"
          name="description"
          defaultValue={product && product[0].description}
          placeholder="description..."
        />
        <input
          type="text"
          name="price"
          defaultValue={product && product[0].price}
          placeholder="price..."
        />
        <button> עדכן </button>
      </Form>
    </>
  );
}

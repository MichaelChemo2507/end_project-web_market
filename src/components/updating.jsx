import { Form, useLoaderData, useNavigate } from "react-router-dom";
export default function Updating() {
  let product = useLoaderData();
  let navigate = useNavigate();
  let productCode;
  return (
    <>
      <Form className="addingForm">
        {product === undefined && (
          <>
            <div className="searchBar">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate({
                    pathname: `/admin/updating/${productCode}`,
                  });
                }}
              >
                חיפוש
              </button>
              <input
                type="text"
                name="productCode"
                placeholder=" ...קוד מוצר"
                onBlur={(e) => {
                  productCode = e.target.value;
                }}
              />
            </div>
          </>
        )}
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

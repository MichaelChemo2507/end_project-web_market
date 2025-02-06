import { productsData } from "../../data/productData";

export async function addingAction({ request }) {
  let obj = Object.fromEntries(await request.formData());
  if (obj) productsData.push(obj);
}

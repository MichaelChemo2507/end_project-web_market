import { productsData } from "../../data/productData"

export function loaderHandelr({ params }) {
    let product = productsData.filter(obj => { return obj.productCode === params.productCode });
    return product;
}
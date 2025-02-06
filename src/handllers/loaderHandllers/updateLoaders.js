import { productsData } from "../../data/productData"
export function loaderHandelr({ params }) {
    if (params) {
        let product = productsData.filter(obj => { return obj.productCode === params.productCode });
        if (product.length > 0) 
            return product;
    }
    return undefined;
}
import { shoppingCartData } from "../data/shoppingCartData";

export function createItemClick({product}) {
    shoppingCartData.push(product);
}
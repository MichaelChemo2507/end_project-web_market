import { shoppingCartData } from "../../data/shoppingCartData";

export function createItemClick(product,productsCartState) {
    productsCartState[0].push(product);
}
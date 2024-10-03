import { products } from "./database.js"

export  function applyDiscounted(product){
    let discounted = product.discounted / 100
    product.discountedPrice = product.price * (1 - discounted)
    return product.discountedPrice;
}
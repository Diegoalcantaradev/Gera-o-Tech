
import {  applyDiscounted } from "./lista-produtos/functions.js";
import { products} from "./lista-produtos/database.js";


let productsList = document.getElementById('product-list');


for(let product of products){
    let Desconto = applyDiscounted(product)
    productsList.innerHTML += `<li>Nome: ${product.name} </li><li>Preço: R$${product.price}</li><li>Preço com Desconto: ${Desconto}</li><li>Desconto Aplicado: ${product.discounted}%</li><li>Categoria: ${product.category}</li><hr>`    
}

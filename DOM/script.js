
import {  applyDiscounted, buildTagLi } from "./lista-produtos/functions.js";
import { products}  from "./lista-produtos/database.js";



let productsList = document.getElementById('product-list');

for(let product of products){
    applyDiscounted(product)
    productsList.innerHTML += buildTagLi(product)
}

//sessão mostrar produtos por categoria

//Mostrar todos os produtos ao click de (todos)
let buttonAllProduct = document.getElementById('allProduct');

buttonAllProduct.addEventListener('click', function (){
    productsList.innerHTML = '';
    for(let product of products){
        applyDiscounted(product)
        productsList.innerHTML += buildTagLi(product)
     }
})
//Mostrar os produtos livros
let buttonBooks = document.getElementById('books');

buttonBooks.addEventListener('click', function (event){
    productsList.innerHTML = '';
    for (let product of products){
        applyDiscounted(product)
        if(product.category === "Livros"){
            productsList.innerHTML += buildTagLi(product);
        }
    }
});
//Mostrar os produtos calçados
let buttonShoes = document.getElementById('shoes');

buttonShoes.addEventListener('click', function (event){
    productsList.innerHTML = '';
    for (let product of products){
        applyDiscounted(product)
        if(product.category === "Calçados"){
            productsList.innerHTML += buildTagLi(product);
        }
    }
})

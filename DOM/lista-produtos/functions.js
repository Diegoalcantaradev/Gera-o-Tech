

export  function applyDiscounted(product){
    let discounted = product.discounted / 100
    product.discountedPrice = product.price * (1 - discounted)
    return product.discountedPrice;
}

export const buildTagLi = function (product) {
    return `<li>Nome: ${product.name} </li>
    <li>Preço: R$${product.price}</li>
    <li>Preço com Desconto: ${product.discountedPrice}</li>
    <li>Desconto Aplicado: ${product.discounted}%</li>
    <li>Categoria: ${product.category}</li>
    <li>Estoque: ${product.stock} </li>
    <hr></hr>`;
}


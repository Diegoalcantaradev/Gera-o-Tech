
import { header, itensHeader } from "./functions/functions.js";


let headerItens = document.getElementById('containerHeader');

for(let itens of itensHeader){
    headerItens.innerHTML += header(itens)
}

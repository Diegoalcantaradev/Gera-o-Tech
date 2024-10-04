export const itensHeader = [
    {
        nome : "Home"
    },
    {
        nome : "Calcular Frete"
    },
    {
        nome : "Contato"
    }
]
export const header = function (itensHeader) {
    return `  
    <li>${itensHeader.nome}</li>
    `
}
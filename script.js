/*Array para percorrer todas as propriedades de uma cor hexadecimal */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

/*Classes do DOM para manipular */
const btn = document.querySelector(".btn")
const color = document.querySelector(".color")

/*método para funcionamento do botão "click me" */
btn.addEventListener("click", () =>{
    /*Variavel para que o simbolo # sempre fique no começo dos valores do array */
    let hexColor = "#"
    /*O FOR vai percorrer os valores do array e trazer 6 valores diferentes */
    for(let i = 0; i < 6; i++){
        hexColor += hex[randomNumber()] //Função que os valores do array
    }

    color.textContent = hexColor
    /*Muda a cor do body */
    document.body.style.backgroundColor = hexColor
})

/*Função para obter os valores aleatorios do Array */
function randomNumber(){
    return Math.floor(Math.random() * hex.length)
}
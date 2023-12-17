// estrutura de decisão
// switch/case/break/default

let fruta = "pera"

switch (fruta){
    case "laranja":
        console.log("suco de laranja")
        break       //para a execução de um "CASE"
    case "banana":
    case "morango":
        console.log("vitamina")
        break       //para a execução de um "CASE"
    case "maçã":
        console.log("suco de maçã")
        break       //para a execução de um "CASE"
    default:        //mensagem que não caso não tenha nenhuma correspondente ela será utilizada
        console.log("suco genérico")
}

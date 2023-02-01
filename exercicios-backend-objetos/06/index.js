const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adultos = []

for (let idade of usuarios) {
    if (idade.idade < 18) {
        jovens.push(idade)
    } if (idade.idade >= 18) {
        adultos.push(idade)
    }
}
console.log(adultos)
















//for (let informacao of usuarios) {
//     if (informacao.idade < 18) {
//         jovens.push(informacao)
//     }
// }
// for (let informacao of usuarios) {
//     if (informacao.idade >= 18) {
//         adultos.push(informacao)
//     }
// }

//console.log(adultos)
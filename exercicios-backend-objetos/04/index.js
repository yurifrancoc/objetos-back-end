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

for (let index = 0; index < usuarios.length; index++) {
    const idade = usuarios[index];
    if (idade.idade > 17) {
        idade.maior_idade = true
    } else { idade.maior_idade = false }
}
console.log(usuarios)

















// for (let item of usuarios) {
//     if (item.idade > 17) {
//         item.nome.push(maior_idade)
//     }
// }



























// for (conferidor of usuarios) {
//     for (index = 0; index < usuarios.length; index++) {
//         if (usuarios.idade > 17) {
//             conferidor.maior_idade = true
//         }
//     }
// }

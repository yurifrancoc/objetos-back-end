const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha", "mauro"],
    },
    {
        nome: "Rodrigo",
        pets: ["artur", "alvaro", "maurin", "pedro", "flavio"]
    }
]
const { nome, pets } = usuarios

for (let index = 0; index < usuarios.length; index++) {
    const objeto = usuarios[index];
    if (objeto.pets.length === 0) {
        console.log(`Meu nome é ${objeto.nome}, e tenho ${objeto.pets.length} pets`)
    } else if (objeto.pets.length === 1) {
        console.log(`Meu nome é ${objeto.nome}, e tenho ${objeto.pets.length} pets`)
    } else if (objeto.pets.length === 2) {
        console.log(`Meu nome é ${objeto.nome}, e tenho ${objeto.pets.length} pets`)
    } else {
        console.log(`Meu nome é ${objeto.nome}, e tenho ${objeto.pets.length} pets`)
    }

}

























// const { nome, pets } = usuarios;

// for (let item of usuarios) {
//     if (item.pets.length === 0) {
//         console.log(item.nome)
//     } else if (item.pets.length === 1) {

//     }
// }
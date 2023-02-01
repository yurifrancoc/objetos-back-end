const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}

const { capitulos } = livro

// console.log(capitulos)
for (let index = 0; index < capitulos.length; index++) {
    const capitulo = capitulos[index];
    if (capitulo.nome === 'O loop do hábito') {
        capitulo.numero = 1
    } if (capitulo.nome === 'O cérebro ansioso') {
        capitulo.numero = 2
    } if (capitulo.nome === 'A regra de ouro da mudança de hábito') {
        capitulo.numero = 3
    } if (capitulo.nome === 'Hábitos angulares, ou a balada de Paul O`neill') {
        capitulo.numero = 4
    } if (capitulo.nome === 'Starbucks e o hábito do sucesso') {
        capitulo.numero = 5
    } if (capitulo.nome === 'O poder de uma crise') {
        capitulo.numero = 6
    } if (capitulo.nome === 'Como a target sabe o que você quer antes que você saiba') {
        capitulo.numero = 7
    } if (capitulo.nome === 'A Saddleback Church e o boicote aos ônibus de Montgomery') {
        capitulo.numero = 8
    } if (capitulo.nome === 'A neorologia do livre-arbítrio') {
        capitulo.numero = 9
    }

}









console.log(capitulos)



// for (let index = 1; index < livro.length; index++) {
//     const capitulo = livro.capitulos[index];
//     if (capitulo.nome === "O loop do hábito") {
//         livro.capitulos.numero = 1
//     }

// }
// console.log(livro.capitulos)
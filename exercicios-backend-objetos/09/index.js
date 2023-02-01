const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Mauro" },
    { nome: "Renato" },
    { nome: "Carlos" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

for (index = 0; index < participantes.length; index++) {
    const participante = participantes[index]
    if (participante.nome === "Carlos") {
        console.log(`Galera, o Carlos ta na posição ${index + 1}, corre lá`)
    }
}


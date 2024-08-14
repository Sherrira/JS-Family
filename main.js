const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const main = async () => {
    const numberOfPeople = parseInt(await askQuestion('Quantas pessoas compõem seu circulo familiar mais próximo:\n?'));

    const familyMembers = []
    for (let i = 1; i <= numberOfPeople; i++) {
        console.log(`\nPessoa ${i}`)
        let name = await askQuestion(`${i}.1) Nome: `)
        let age = parseInt(await askQuestion(`${i}.2) Idade: `))
        let sex = await askQuestion(`${i}.3) Sexo: `)
        let relationship = await askQuestion(`${i}.4) Grau de parentesco: `)

        familyMembers.push({ name, age, sex, relationship })
    }

    let adults = familyMembers.filter(person => parseInt(person.age) >= 18).length
    let minors = familyMembers.filter(person => parseInt(person.age) < 18).length
    let males = familyMembers.filter(person => person.sex.toLowerCase() === 'm').length
    let females = familyMembers.filter(person => person.sex.toLowerCase() === 'f').length

    console.log(`\nResumo:`)
    console.log(`Maiores de idade: ${adults}`)
    console.log(`Menores de idade: ${minors}`)
    console.log(`Masculino: ${males}`)
    console.log(`Feminino: ${females}`)

    rl.close()
};

main();
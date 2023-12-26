let userName = getFirstName("Silvana-Barboza-de-Souza-Cruz", "-")
console.log("Seja bem vinda " + userName)

userName = getFirstName("Sophia de Souza da Cruz ", " ")
console.log("Seja bem vinda " + userName)

function getFirstName(name, splitChar){
    let firsName = name.split(splitChar)[0]
    return firsName
}
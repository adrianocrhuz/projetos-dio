//JSON - JaaScript Object Notation
// chave e valor com o objeto de transferir dados
/*
let name = 'Sophia'
let age = 1.9
let products = ['Mouse 2xwm', 'teclado mecanico', 'Monitor']
let productsValues = [29.90, 129.99, 899,99]

generateInvoice(name, age,products, productsValues)

function generateInvoice(name, age,products, productsValues) {
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("--------------")
    console.log('O produto é ' + products[0])
    console.log('O valor é ' + productsValues[0])
}*/
//Trabalhando com JSON na prática

let invoice = {
    name: 'Silvana',
    age: 38,
    products: {
        0: ['Mouse 2xwm', 29.90],
        1: ['Teclado mecanico', 129.99],
        2: ['Monitor', 899.99],
        3: ['TV 100 polegadas', 10000.90]
    },
    taxes: 98.90
}
console.log(invoice)
//console.log(invoice.products)

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log('------------')

    for(let index in invoice.products) {
        let [productsName, productsPrice] = invoice.products[index]
        console.log(` - ${productsName}: R$ ${productsPrice}`)
    }
    
}

//Crie uma variável para armazenar o nome 
// e a quantidade de experiência (XP) de um herói,
// depois utilize uma estrutura de descisão
//para apresentar alguma das mensagens abaixo

const nomeHeroi = 'Sansão'

let xp = ''
let nivel1 = 'Ferro'
let nivel2 = 'Bronze'
let nivel3 = 'Prata'
let nivel4 = 'Ouro'
let nivel5 = 'Platina'
let nivel6 = 'Ascendente'
let nivel7 = 'Imortal'
let nivel8 = 'Radiante'

if(xp < 1.000) {
   console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel1)
} else if(xp >= 1.001 && xp <= 2.000) {
   console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel2)
}  else if (xp >= 2.001 && xp < 3.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel3)
} else if (xp >= 3.001 && xp < 4.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel4)
} else if (xp >= 4.001 && xp < 5.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel5)
} else if (xp >= 5.001 && xp < 6.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel6)
} else if (xp >= 7.001 && xp < 8.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel7)
} else (xp >= 10.001) 
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel8)



   


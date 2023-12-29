//Instruções para entrega
/*# 2️⃣ Calculadora de partidas Rankeadas com javaScript
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções*/

//## Objetivo:

/*Crie uma função que recebe como parâmetro 
a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, 
o saldo de Rankeadas 
deve ser feito através do calculo (vitórias - derrotas)*/

// Função que calcula o saldo de Rankeadas e determina o nível
function calcularSaldoRankeadas(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o resultado
    return { saldoVitorias, nivel };
}

/*Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal*/

// Exemplo de uso
const vitorias = 50;
const derrotas = 20;

const resultado = calcularSaldoRankeadas(vitorias, derrotas);

/*## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

// Exibe a mensagem
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);

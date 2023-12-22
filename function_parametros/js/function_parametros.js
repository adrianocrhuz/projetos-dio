torrar('pão de forma', 'Sophia', 10.90)
torrar('pão integral', 'Silvana', 9.90)

function torrar(pao, nome = 'Cliente', valor) {
    document.write('torrada feita com ' + pao + '<br>')
    document.write('ela é um pedido de ' + nome + '<br>')
    document.write('o valor é ' + valor + '<br>')
}

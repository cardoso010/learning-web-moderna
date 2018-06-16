const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(2, 3, soma)
imprimirResultado(2, 3, function (x, y) {
    return 2 - 1
})
imprimirResultado(2, 3, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Olá')
    }
}

pessoa.falar()
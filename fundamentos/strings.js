const escola = "Cod3r"

// exibi valor na posição 4, ele começa com 0
console.log(escola.charAt(4))
// exibi o valor da posição 5 mas quando nao existe essa posição ele exibi vazio
console.log(escola.charAt(5))
// exibi o codigo hexa do caracter da posição 3
console.log(escola.charCodeAt(3))
// exibi o valor da posição 3
console.log(escola.indexOf(3))

// pega os valores apartir da posição 1
console.log(escola.substring(1))
// pega o valores da posição 0 ao 3
console.log(escola.substring(0, 3))

// concatena variaveis
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
// substitui valor
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))


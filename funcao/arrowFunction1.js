let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // returno é implicito
console.log(dobro(Math.PI))

let ola = () => 'Olá'

ola = _ => 'Olá' //possui um param
console.log(ola())
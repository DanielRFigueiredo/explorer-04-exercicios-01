const firstNumber = Number(prompt('Digite o primeiro numero:'))
const secondNumber = Number(prompt('Digite o segundo numero:'))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const divRest = firstNumber % secondNumber
const sumEvenOrOdd = (sum % 2) === 0 ? 'par' : 'impar';
const equalNumbers = firstNumber === secondNumber ? "iguais" : "diferentes"

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${divRest}`)
alert(`A soma dos dois numeros é ${sumEvenOrOdd}: ${sum}`)
alert(`Os dois numeros são ${equalNumbers}`)

// Calcula a conta
function equal() {
    if (validateInput()) {

        switch (currentMath) {
            case 'sum':
                result = previousInput + currentInput
                break
            case 'sub':
                result = previousInput - currentInput
                break
            case 'mul':
                result = previousInput * currentInput
                break
            case 'div':
                result = previousInput / currentInput
                break
            default:
                alert('Invalid operation.')
                return
        }
        
        previousInput = result
        updateResult(result)
        clearScreen = true
    }
}

// Atualiza a operação, salva o primeiro input e atualiza o boleano de limpar a tela
function updateVars(math) {
    if (validateInput()) {
        currentMath = math
        previousInput = Number(input.textContent)
        clearScreen = true
    }
}

// Atualiza o input a cada número digitado
function updateInput(value) {
    input.style.color = '#fffbf0'

    if (clearScreen) {
        input.textContent = '0'
        clearScreen = false
    }

    if (input.textContent === '0') {

        if (value === '.') {
            input.textContent += value
        } else if (!(value === '0' | value === '00')) {
            input.textContent = value
        }

    } else {
        input.textContent += value
    }

    currentInput = Number(input.textContent)
}

// Atualizar o resultado na tela e a cor
function updateResult(result) {
    input.textContent = String(result).slice(0,11)

    if (result > 20) {
        input.style.color = 'lightgreen'
    } else {
        input.style.color = 'orange'
    }
}

// Alterar sinal de positivo e negativo
function changeSign() {
    if (input.textContent !== '0') {
        input.textContent = -input.textContent
        currentInput = Number(input.textContent)
    }
}

// Validar input
function validateInput() {
    if (isNaN(Number(input.textContent))) {
        alert('Put a valid input.')
        clearScreen = true
        return false
    }

    if (Number(input.textContent) <= 0) {
        alert('The input must be greater than zero.')
        clearScreen = true
        return false
    }
    
    return true
}

// Operação atual
let currentMath

// Primeiro input
let previousInput

// Último input
let currentInput

// Resultado da conta
let result

// Boleano para limpar o resultado da tela
let clearScreen = false

const input = document.getElementById('result')

const sumBtn = document.getElementById('sum')
const subBtn = document.getElementById('sub')
const mulBtn = document.getElementById('mul')
const divBtn = document.getElementById('div')
const equalBtn = document.getElementById('equal')

for (btn of [sumBtn, subBtn, mulBtn, divBtn]) {
    btn.addEventListener('click', function(e) { updateVars(this.id) })
}

equalBtn.addEventListener('click', function(e) { equal() })

const signBtn = document.getElementById('sign')
signBtn.addEventListener('click', function(e) { changeSign() })

const valueBtn = document.getElementsByName('value')
for (btn of valueBtn) {
    btn.addEventListener('click', function(e) { updateInput(this.textContent) })
}

document.getElementById('ac').addEventListener('click', function(e) { window.location.reload() })


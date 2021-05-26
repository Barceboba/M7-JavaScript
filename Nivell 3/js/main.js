// "const" > Valores fijos
const botonNumeros = document.getElementsByName('valor-num');
const botonOpera = document.getElementsByName('valor-ope');
const botonIgual = document.getElementsByName('valor-igu')[0];
const botonDelete = document.getElementsByName('valor-del')[0];
const botonDot = document.getElementsByName('valor-dot');

// "var" > Valores que van a cambiar
let result = document.getElementById('resultat');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;


botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacio(boton.innerText);
    })
});

botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function () {
    clear();
    actualizarDisplay();
});

function selectOperacio(op) {
    if (opeActual === '') return;
    if (opeAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    let calculo;
    const anterior = Number(opeAnterior);
    const actual = Number(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '&times':
            calculo = anterior * actual;
            break;
        case '÷':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

clear();
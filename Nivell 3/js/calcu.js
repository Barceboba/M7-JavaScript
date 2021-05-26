//Defineix valor de pantalla a zero, primer operant, segon operant i operador.
const calculadora = {
    valorPant: '0',
    primerOper: null,
    segonOper: false,
    operador: null,
  };
  //
  function agafaDig(digit) {
    const {
      valorPant,
      segonOper
    } = calculadora;
  
    if (segonOper === true) {
      calculadora.valorPant = digit;
      calculadora.segonOper = false;
    } else {
      calculadora.valorPant = valorPant === '0' ? digit : valorPant + digit;
    }
  }
  
  function colocDec(dot) {
    if (calculadora.segonOper === true) {
      calculadora.valorPant = "0."
      calculadora.segonOper = false;
      return
    }

  //Comprova únic punt
    if (!calculadora.valorPant.includes(dot)) {
      calculadora.valorPant += dot;
    }
  }
  
  function evaluaoperador(seguentope) {
    const {
      primerOper,
      valorPant,
      operador
    } = calculadora
    const inputValue = Number(valorPant);
  
    if (operador && calculadora.segonOper) {
      calculadora.operador = seguentope;
      return;
    }
  
  //Comprova primer operador    
    if (primerOper == null && !isNaN(inputValue)) {
      calculadora.primerOper = inputValue;
    } else if (operador) {
      const result = calculate(primerOper, inputValue, operador);
  
      calculadora.valorPant = `${Number(result.toFixed(7))}`;
      calculadora.primerOper = result;
    }
  
    calculadora.segonOper = true;
    calculadora.operador = seguentope;
  }

  //Càlculs
  function calculate(primerOper, segonOperant, operador) {
    if (operador === '+') {
      return primerOper + segonOperant;
    } else if (operador === '-') {
      return primerOper - segonOperant;
    } else if (operador === '*') {
      return primerOper * segonOperant;
    } else if (operador === '/') {
      if (segonOperant === 0) { //Divisor zero
        alert('ERROR, no és possible dividir entre zero!');
      } else
        return primerOper / segonOperant;
    }
  
    return segonOperant;
  }
  
  function resetcalculadora() {
    calculadora.valorPant = '0';
    calculadora.primerOper = null;
    calculadora.segonOper = false;
    calculadora.operador = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.resultat');
    display.value = calculadora.valorPant;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.teclasCal');
  keys.addEventListener('click', event => {
    const {
      target
    } = event;
    const {
      value
    } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        evaluaoperador(value);
        break;
      case '.':
        colocDec(value);
        break;
      case 'nateja':
        resetcalculadora();
        break;
      default:
        if (Number.isInteger(Number(value))) {
          agafaDig(value);
        }
    }
  
    updateDisplay();
  });
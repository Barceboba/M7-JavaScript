//Variables








// Declaración de la función
function calculadora() {

  let valor1 = Number(document.getElementById("numero1").value);
  let valor2 = Number(document.getElementById("numero2").value);
  let operador = 0;

  if (document.getElementById('suma').checked) {
    operador = "suma";
  }
  else if (document.getElementById('resta').checked) {
    operador = "resta";
  }
  else if (document.getElementById('multi').checked) {
    operador = "multi";
  }
  else if (document.getElementById('divi').checked) {
    operador = "divi";
  }


  if (operador == "suma") {
    suma = (valor1 + valor2);
    operador = suma;

  }
  else if (operador == "resta") {
    resta = (valor1 - valor2);
    operador = resta;

  }
  else if (operador == "multi") {
    multi = (valor1 * valor2);
    operador = multi;

  }
  else if (operador == "divi") {
    if (valor2 === 0) {
      alert('ERROR, divisor no pot ser zero.');
      operador = 'ERROR!';
    } else {
      divi = (valor1 / valor2);
      operador = divi;
    }
  }


  //resultat = calculadora(operador, valor1, valor2);
  document.getElementById('resultat').innerHTML = "El resultat de l'operació és: " + operador + ".";
}
//document.getElementById('resultat').innerHTML = "El resultat de l'operació és: " + operador + ".";

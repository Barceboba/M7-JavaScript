//Variables



// Declaración de la función
function calculadora() {



  let numero1 = Number(document.getElementById('numero1').value);
  
  let numero2 = Number(document.getElementById('numero2').value);

  let res;
  let operacio = "N/A";
  

  if (document.getElementById('suma').checked) {
    res = numero1 + numero2;
    operacio = "suma";

  } else if (document.getElementById('resta').checked) {
    res = numero1 - numero2;
    operacio = "resta";

  } else if (document.getElementById('multi').checked) {
    res = numero1 * numero2;
    operacio = "multiplicació";

  } else if (document.getElementById('divi').checked) {
    if (numero2 == 0) {
      alert("Nº zero no és un divisor admès");
    } else {
      res = numero1 / numero2;
      operacio = "divisio";
    }
  } else {
    alert("Triar una operació.");
  }
  document.getElementById('resolucio').innerHTML = "La " + operacio + " de " + numero1 + " i " + numero2 + " és igual a " + res + ".";

}
  
  
  
//var resultat = calculadora();
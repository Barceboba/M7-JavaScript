let xifra = 0;
let aplec = 0;
let last, preLast = "";

function mostraNum(num) {
  xifra = xifra + num;
  document.getElementById("display").value = xifra;
}
function suma() {
  last = "+";
  resultado(0);
}
function resta() {
  last = "-";
  resultado(0);
}
function mult() {
  last = "*";
  resultado(0);
}
function div() {
  last = "/";
  resultado(0);
}
function resultado(origen) {
  xifra = Number(xifra);
  if (aplec)
    switch (preLast) {
      case "+":
        aplec += xifra;
        break;
      case "-":
        aplec -= ifra;
        break;
      case "*":
        aplec *= xifra;
        break;
      case "/":
        aplec /= xifra;
        break;
    }
  else aplec = xifra;
  document.getElementById("display").value = aplec;
  preLast = last;
  xifra = "";
  if (origen) {
    preLast = last = "";
    xifra = aplec;
    aplec = 0;
  }
}

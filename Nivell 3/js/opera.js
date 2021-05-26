let xifra = "";
let aplec = 0;
let punt = 0;
let iniOper = true;
let sumar = false;
let restar = false;
let multiplicar = false;
let dividir = false;

function mostraNum(num) {
    document.getElementById("resultat").value = xifra + num;
    xifra = document.getElementById("resultat").value;
}

function suma() {
    if (restar) {
        aplec = aplec - Number(xifra);
        document.getElementById("resultat").value = aplec;

    } else if(multiplicar) {
        aplec = aplec * Number(xifra);
        document.getElementById("resultat").value = aplec;

    } else if(dividir) {
        aplec = aplec / Number(xifra);
        document.getElementById("resultat").value = aplec;
        
    } else {
        aplec = aplec + Number(xifra);
        document.getElementById("resultat").value = aplec;
    }
    xifra = "";
    sumar = true;
    restar = false;
    iniOper = false;

}

function resta() {
    if (iniOper == false) {
        if (sumar) {
            aplec = aplec + Number(xifra);
            document.getElementById("resultat").value = aplec;
        } else {
            aplec = aplec - Number(xifra);
            document.getElementById("resultat").value = aplec;
        }
    } else {
        aplec = Number(xifra);
        iniOper = false;
    }
    xifra = "";
    sumar = false;
    restar = true;
}

function multi() {
    aplec = aplec * Number(xifra);
    document.getElementById("resultat").value = aplec;

    xifra = "";
    multiplicar = true;
}

function divi() {
    aplec = aplec / Number(xifra);
    document.getElementById("resultat").value = aplec;

    xifra = "";
    dividir = true;
}

function igual() {
    if (sumar) {
        document.getElementById("resultat").value = aplec + Number(xifra);
    }
    else if (restar) {
        document.getElementById("resultat").value = aplec - Number(xifra);
    }
    else if (multiplicar) {
        document.getElementById("resultat").value = aplec * Number(xifra);

    }
    else if (dividir) {
        document.getElementById("resultat").value = aplec / Number(xifra);
    }
    aplec = Number(document.getElementById("resultat").value);
    xifra = 0;
}
document.getElementById("resultat").value = 0;
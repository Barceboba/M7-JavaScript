let myWay = ['M', 'I', 'Q', '2', '4', 'U', 'E', 'L'];
for (let i = 0; i < myWay.length; i++) {
    if (myWay === ['A'] || ['E'] || ['I'] || ['O'] || ['U']){
    console.log('He trobat la VOCAL: ' + myWay[i]);
    } 
    else if (myWay === ['1'] || ['2'] || ['3'] || ['4'] || ['5'] || ['6'] || ['7'] || ['8'] || ['9'] || ['0']) {
        console.log('Els noms de persones no contenen el número: ' + myWay[i]);
    } else {
        console.log('He trobat la CONSONTANT: ' + myWay[i]); 
    }
}
const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const palavra = `XADREZ`;

let cifra:string = ``;

palavra.split(``).forEach(letra => {
    let posicao = alfabeto.indexOf(letra);
    if (posicao > -1){
        if (alfabeto [posicao+3] === undefined ){
            if (posicao+3 > alfabeto.length -1){
                cifra = cifra.concat(alfabeto[posicao+3 - alfabeto.length]);
            }
        }else{
            cifra = cifra.concat(alfabeto[posicao + 3]);
        } 
    }
});
console.log(cifra);

let descifra:string = ``;

cifra.split(``).forEach(letra => {
    let posicao = alfabeto.indexOf(letra);
    if (posicao > -1){
        if (alfabeto[posicao-3] === undefined ){
            if(posicao-3 < 0 ){
                descifra = descifra.concat(alfabeto[alfabeto.length + posicao-3]);
            }
        }else{
            descifra = descifra.concat(alfabeto[posicao - 3]);
        }
    }
});
console.log(descifra);
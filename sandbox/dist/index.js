"use strict";
// typage explicite
let nom = "Bonjour";
let age = 14;
let isConnected = true;
let giganombre = 90000000000000000000000000000n;
let variableUndefined = undefined;
let variableNulle = null;
// typage implicite
let maDate = new Date();
// Union de types
let variable = 42;
variable = variable || 42;
let a = 1;
let b = "string";
// attention, les types doivent être compatibles pour être assignés.
// a = b || 42;
let valeur;
// attention: pas possible car string et number n'ont pas toISOString() !
// valeur.toISOString();
if (typeof valeur === "string") {
    console.log(valeur.repeat(5));
}
if (valeur instanceof Date) {
    console.log(valeur.toISOString());
}
let monTableau = [];
// attention 
let monTableau2 = [];
let tableauMixte = [];
let matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// syntaxe n2 :
// let matrice: Array<Array<number | string>> = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let maFonction: Function = (a: number) => {
//     console.log("Coucou", a);
// };
// let maFonction = (a: number) => {
//     console.log("Coucou", a);
// };
// (<paramètre>:<type>) => <typeDeRetour>
let maFonction = (nombre) => {
    // console.log("Coucou", nombre);
};
maFonction(42);
let monAutreFonction87 = () => {
};
// this: "contexte" de la fonction
// ensuite les paramètres
function monAutreFonction() {
}
// print: paramètre optionnel DONC non obligatoire
function addition(a, b, print) {
    if (print) {
        console.log(a + b);
    }
    return a + b;
}
addition(5, 5);
addition(6, 6, true);
// attention, l'optionnalité est différente à l'utilisation q'un paramètre undefined. le paramètre undefined devra être mentionné.
function addition2(a, b, print) {
}
addition2(5, 5, undefined);
console.log("a", "b", "c", 42);
// ... => tous les paramètres de la fonction
function additionInfinie(...parametres) {
    let a = 0;
    for (const param of parametres) {
        a = a + param;
    }
    return a;
}
// possible ! Les paramètres "fixes" doivent être mis avant les paramètres de taille non connue
function soustractionPasFinie(message, ...params) {
}
// pas possible !
// function soustractionPasFinie2(...params: number[], message: string) {
// }
additionInfinie(5, 85, 85, 45698);

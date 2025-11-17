"use strict";
let variableCast;
console.log(variableCast.toFixed());
// ! => opérateur qui affirme qu'une variable n'est ni nulle ni undefined ici
variableCast.toString();
function logAnyThing(param) {
    param.toUpperCase();
}
const main = async () => {
    const fetchResult = await fetch("https://google.com");
    const js = await fetchResult.json();
};
let Amaury = "Amaury";
// si on ne caste pas, role est de type string et donc incompatible avec le type "Role"
let role = "Admin";
let role1 = "Utilisateur";
role1 = role;

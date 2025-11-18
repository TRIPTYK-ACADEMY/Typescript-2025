/**
Réimplémentez la fonction map en utilisant des génériques en TypeScript. (ne pas utiliser les fonctions intégrées de JavaScript mdr)

Exemple d'utilisation:

Doit supporter tous les types
 */
function map<T, R>(tab: T[], func: (value: T) => R): R[] {
    let result: R[] = [];

    for (const element of tab) {
        let resultOfFunc = func(element);
        result.push(resultOfFunc);
    }

    return result;
}


const resultString = map(["a", "b", "c"], (value) => {
    return value.toUpperCase();
});

const tableauDeNombres = map<string, number>(["0", "1", "2"], (v) => parseInt(v));

["0", "1", "2"].map((v) => parseInt(v));
// transforme ma chaine de caractères en nombre

console.log(resultString);
// ["A","B", "C"]

// const result = map([1, 2, 3], (value) => {
//     return value * 2;
// })
// [2, 4, 6]


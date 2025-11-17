type ObjAmaury = {
    name: string,
    date: Date,
    age: number
}

let obj: ObjAmaury = {
    name: "Amaury",
    date: new Date(),
    age: 15
};

type User = {
    firstName: string,
    email?: string,
    lastName: string,
}

let amaury: User = {
    firstName: "Amaury",
    lastName: "Deflorenne"
}

let gilles: User = {
    firstName: "Gilles",
    lastName: "Bertrand",
    email: undefined
}

let sebastien: User = {
    firstName: "Seb",
    lastName: "Cardon",
    email: "seb@cardon.be"
}

console.log(amaury);
console.log(sebastien);
console.log(gilles);

// let obj: {
//     name: string,
//     date: Date,
//     age: number
// } = {
//     name: "Amaury",
//     date: new Date(),
//     age: 15
// };


obj.name

type ObjetPartiel = {
    name: string,
    // on vient dire que notre objet peut être constitué de n'importe quelle clé de type string avec une valeur inconnue
    [key: string]: unknown
}

let monObjetAvecDesProprietesInconnues: ObjetPartiel = {
    name: "Amaury",
    truc: 14
}

type ResponseAPI = {
    attributes: {},
    meta: {
        [key: string]: unknown
    }
}

// ici: erreur car pas de clés supplémentaire autorisées
// sebastien.truc
// ici: pas d'erreur car des clés supplémentaires de type unknown sont autorisée
monObjetAvecDesProprietesInconnues.truc
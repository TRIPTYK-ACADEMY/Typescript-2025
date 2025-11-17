let variableCast: number | string | undefined;

console.log((variableCast as number).toFixed())

// ! => opérateur qui affirme qu'une variable n'est ni nulle ni undefined ici
variableCast!.toString();

function logAnyThing(param: unknown) {
    (param as string).toUpperCase();
}

const main = async () => {
    const fetchResult = await fetch("https://google.com");
    const js = await fetchResult.json() as string;
};


let Amaury = "Amaury" as const;

type Role = "Admin" | "Utilisateur";

// si on ne caste pas, role est de type string et donc incompatible avec le type "Role"
let role = "Admin" as const;
let role1: Role = "Utilisateur";

role1 = role;


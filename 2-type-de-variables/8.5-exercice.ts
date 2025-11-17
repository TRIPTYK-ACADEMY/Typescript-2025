// Exercice: Tuples 

// Crée une fonction qui accepte un tableau de tuples contenant un nom (string) et un âge (number).
// Stocker le typage du tuple dans un type alias nommé `Personne`.

type Personne = [string, number];

const tuples: Personne[] = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 35],
];

// La fonction doit trier les tuples par âge croissant et retourner le tableau trié. 
function triPersonnes(personnes: Personne[]) {
    // [...personnes] => on fait une copie du tableau en le déstructurant
    // ensuite, on le trie et on le renvoie
    return [...personnes].sort(([, ageA],[, ageB]) => ageA - ageB);
}

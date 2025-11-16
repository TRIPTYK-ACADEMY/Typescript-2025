# Narrowing

Le *narrowing* est le processus par lequel TypeScript réduit le type d'une variable en fonction des contrôles effectués dans le code. Cela permet d'affiner les types et d'améliorer la sécurité du code en garantissant que certaines opérations ne sont effectuées que sur des types spécifiques.

## Exemple de Narrowing avec des types union

```typescript
let valeur: string | number | Date;

if (typeof valeur === "string") {
    // Ici, TypeScript sait que 'valeur' est une string
    console.log("Longueur de la chaîne :", valeur.length);
} else if (typeof valeur === "number") {
    // Ici, TypeScript sait que 'valeur' est un number
    console.log("Valeur au carré :", valeur * valeur);
} else {
    // Ici, TypeScript sait que 'valeur' est une Date
    console.log("Année :", valeur.getFullYear());
}
```



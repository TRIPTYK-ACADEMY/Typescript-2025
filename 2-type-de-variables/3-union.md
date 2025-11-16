# Union Types

En TypeScript, un **type union** permet de définir une variable qui peut contenir plusieurs types de valeurs différents. On utilise le symbole `|` pour séparer les types dans une union.

## Définir un type union

```typescript
let valeur: string | number | Date;
valeur = "Bonjour"; // valide
valeur = 42;        // valide
valeur = new Date(); // valide
valeur = true;    // erreur de type
```

## Petit test

Essayez d'appeler la méthode `toUpperCase()` sur la variable `valeur` lorsque vous lui avez assigné une chaîne de caractères.

```typescript
let valeur: string | number | Date;
console.log(valeur.toUpperCase()); // Ne fonctionne pas !
```
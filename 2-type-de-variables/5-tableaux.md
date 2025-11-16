# Les tableaux en TypeScript

## Déclaration de tableaux

### Syntaxe avec crochets
```typescript
let nombres: number[] = [1, 2, 3, 4, 5];
let prenoms: string[] = ["Alice", "Bob", "Charlie"];
```

### Syntaxe avec Array<T>
```typescript
let nombres: Array<number> = [1, 2, 3, 4, 5];
let prenoms: Array<string> = ["Alice", "Bob", "Charlie"];
```

Quelle est la différence ? Pratiquement aucune, c'est une question de préférence personnelle. 

## Tableaux multidimensionnels

```typescript
let matrice: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

## Méthodes courantes

### Ajout d'éléments
```typescript
let fruits: string[] = ["pomme", "banane"];
fruits.push("orange");        // Ajoute à la fin
fruits.unshift("fraise");     // Ajoute au début
```

### Suppression d'éléments
```typescript
fruits.pop();                 // Supprime le dernier
fruits.shift();               // Supprime le premier
```

### Parcours
```typescript
fruits.forEach((fruit) => {
    console.log(fruit);
});
```

### Transformation
```typescript
let nombres: number[] = [1, 2, 3, 4];
let doubles = nombres.map(n => n * 2);  // [2, 4, 6, 8]
```

### Filtrage
```typescript
let pairs = nombres.filter(n => n % 2 === 0);
```
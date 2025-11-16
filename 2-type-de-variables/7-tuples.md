# Les Tuples en TypeScript

## Définition

Un tuple est un tableau avec un **nombre fixe d'éléments** dont les **types sont connus** à des positions spécifiques.

## Syntaxe de base

```typescript
let user: [string, number];
user = ["Alice", 25]; // ✅ Valide
user = [25, "Alice"]; // ❌ Erreur : types inversés
```

## Exemples

### Tuple simple

```typescript
let coordinates: [number, number] = [48.8566, 2.3522];
let response: [number, string] = [200, "OK"];
```

### Accès aux éléments

```typescript
let person: [string, number] = ["Bob", 30];
console.log(person[0]); // "Bob"
console.log(person[1]); // 30
```

## Différence avec les tableaux

```typescript
// Tableau : type uniforme, longueur variable
let array: number[] = [1, 2, 3, 4];

// Tuple : types mixtes, longueur fixe
let tuple: [string, number] = ["age", 25];
```
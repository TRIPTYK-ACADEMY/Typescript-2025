# Le mot-clé `type` en TypeScript

## Introduction

Le mot-clé `type` permet de créer des alias de types personnalisés en TypeScript. Il offre une façon flexible de nommer et réutiliser des types complexes.

## Syntaxe de base

```typescript
type NomDuType = TypeExistant;
```

## Exemples d'utilisation

### Alias simple

```typescript
type ID = string | number;
type Nom = string;

let userId: ID = 123;
let userName: Nom = "Alice";
```

### Types unions

```typescript
type Statut = "en attente" | "validé" | "rejeté";
type Reponse = string | number | boolean;
```

### Types fonctions

```typescript
type Operation = (a: number, b: number) => number;

const addition: Operation = (x, y) => x + y;
```

=> En résumé, donne une "signification" à un type complexe pour le réutiliser facilement dans le code.
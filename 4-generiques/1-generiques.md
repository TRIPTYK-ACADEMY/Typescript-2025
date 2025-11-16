# Les Génériques en TypeScript

## Introduction

Les génériques permettent de créer des composants réutilisables qui fonctionnent avec plusieurs types plutôt qu'un seul.

## Syntaxe de base

```typescript
function identity<T>(arg: T): T {
    return arg;
}

// Utilisation
let output1 = identity<string>("hello");
let output2 = identity<number>(42);
```

## Génériques avec des tableaux

```typescript
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const first = getFirstElement<number>([1, 2, 3]); // number | undefined
```

## Interfaces génériques

```typescript
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "hello" };
```

## Classes génériques

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```

## Contraintes sur les génériques

```typescript
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // Erreur
```


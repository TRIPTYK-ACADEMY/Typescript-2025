# Les Fonctions en TypeScript

## Déclaration de fonctions

### Le mot clé Function

C'est un peu le générique des fonctions en TypeScript. On peut l'utiliser pour typer une variable qui contiendra une fonction.

```typescript
let maFonction: Function;
maFonction = function (a: number, b: number): number {
    return a + b;
};
```


### Fonction classique
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

### Fonction fléchée
```typescript
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Version courte
const subtract = (a: number, b: number): number => a - b;
```

## Paramètres optionnels

```typescript
function greet(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}!`;
}
```

## Paramètres par défaut

```typescript
function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}
```

## Paramètres rest (rest parameters)

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
```

## Type de retour void

```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

## Surcharge de fonctions

```typescript
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
    return typeof value === 'string' ? value.toUpperCase() : value.toFixed(2);
}
```

## Les paramètres REST

Se démarquent par les trois points `...`, ils permettent de passer un nombre variable d'arguments à une fonction. Ces arguments sont regroupés dans un tableau.

```typescript
function concatenate(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}
```

## Typage d'une fonction fléchée

### Typage inline
```typescript
const divide: (a: number, b: number) => number = (a, b) => {
    return a / b;
};
```

### Typage avec type alias
```typescript
type MathOperation = (a: number, b: number) => number;

const modulo: MathOperation = (a, b) => {
    return a % b;
};
```
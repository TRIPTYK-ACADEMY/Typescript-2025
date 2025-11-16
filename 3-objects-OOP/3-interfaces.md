# Les Interfaces en TypeScript

## 1. Introduction

Les interfaces définissent la structure d'un objet en TypeScript. Elles permettent de typer des objets, des classes et des fonctions.

## 2. Déclaration de base

```typescript
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Alice",
    age: 30
};
```

## 3. Propriétés optionnelles

```typescript
interface Config {
    host: string;
    port?: number; // Propriété optionnelle
}
```

## 4. Méthodes dans les interfaces

```typescript
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}
```

## 5. Extension d'interfaces

```typescript
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Rex",
    breed: "Labrador"
};
```

## 6. Implémentation d'interfaces

```typescript
interface Drawable {
    draw(): void;
}

interface Colorable {
    color: string;
    setColor(color: string): void;
}

class Rectangle implements Drawable, Colorable {
    color: string = "black";

    constructor(private width: number, private height: number) {}

    draw(): void {
        console.log(`Dessiner un rectangle ${this.color}`);
    }

    setColor(color: string): void {
        this.color = color;
    }
}
```

## 7. Interfaces vs Types

Il n'y a pas de différence majeure entre les interfaces et les types alias en TypeScript :(. Grand débat.

- Les interfaces sont généralement préférées pour définir la forme des objets, tandis que les types alias sont souvent utilisés pour des types plus complexes (comme les unions ou les intersections).

```typescript
// Interface
interface Person {
    name: string;
}

// Type alias
type PersonType = {
    name: string;
};

// Les interfaces peuvent être étendues facilement
interface Employee extends Person {
    employeeId: number;
}
```

### Extension d'interface vs Intersection de types

```typescript
// Extension d'interface
interface A {
    propA: string;
}
interface B extends A {
    propB: number;
}
// Intersection de types
type C = {
    propA: string;
} & {
    propB: number;
};
```

Les deux approches sont similaires, mais il y'a une légère différence: 

Lorsque des interfaces portent le même nom ou étendent d'autres interfaces, TypeScript tente de les fusionner si les propriétés sont compatibles. Si elles ne le sont pas (même nom de propriété mais types différents), TypeScript génère une erreur immédiatement.

Ex:

```typescript
interface Person {
  name: string;
}
interface Person {
  name: number;
}
```

Cela génère une erreur car `name` est défini deux fois avec des types différents.

Pour les types alias, c'est un peu plus étrange:

```typescript
interface Person1 {
  name: string;
}
 
interface Person2 {
  name: number;
}
 
type Staff = Person1 & Person2
 
const staffMember: Staff = {
    name: "Alice"
};
```

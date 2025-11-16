# Le mot-clé `readonly` en TypeScript

## Définition

Le mot-clé `readonly` permet de rendre une propriété immuable après son initialisation. Une fois assignée, la valeur ne peut plus être modifiée.

## Syntaxe de base

```typescript
class Person {
    readonly id: number;
    readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const person = new Person(1, "Alice");
// person.id = 2; // ❌ Erreur : Cannot assign to 'id' because it is a read-only property
```

## Avec les interfaces

```typescript
interface User {
    readonly email: string;
    readonly createdAt: Date;
    age: number; // modifiable
}

const user: User = {
    email: "user@example.com",
    createdAt: new Date(),
    age: 25
};

user.age = 26; // ✅ OK
// user.email = "new@example.com"; // ❌ Erreur
```

## Arrays readonly

```typescript
const numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // ❌ Erreur : push n'existe pas sur readonly array
// numbers[0] = 10; // ❌ Erreur

const copy = [...numbers]; // ✅ OK pour créer une copie mutable
```

## `ReadonlyArray<T>`

```typescript
const items: ReadonlyArray<string> = ["a", "b", "c"];
// Équivalent à : readonly string[]
```

## Readonly vs const

- `const` : pour les variables
- `readonly` : pour les propriétés d'objets/classes

## Cas d'usage

- Identifiants uniques (ID)
- Timestamps de création
- Configuration immuable
- Prévenir les modifications accidentelles

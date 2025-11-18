# Les Classes en TypeScript

## 1. Syntaxe de base

Les classes permettent de créer des objets avec des propriétés et des méthodes.

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Bonjour, je suis ${this.name}`;
    }
}

const person = new Person("Alice", 30);
console.log(person.greet()); // "Bonjour, je suis Alice"
```

## 2. Modificateurs d'accès

- `public` : accessible partout (par défaut)
- `private` : accessible uniquement dans la classe

```typescript
class BankAccount {
    public owner: string;
    private balance: number;
    protected accountNumber: string;
    private createdAt: Date;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = Math.random().toString();
        this.createdAt = new Date();
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}
```

## 3. Syntaxe courte (Parameter Properties)

```typescript
class User {
    constructor(
        public username: string,
        private password: string,
        private id: number
    ) {}
}
// Équivalent à déclarer les propriétés et les assigner dans le constructeur
```

## 6. Getters et Setters

```typescript
class Temperature {
    private _celsius: number = 0;

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Température invalide");
        }
        this._celsius = value;
    }

    get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77
```

## 7. Membres statiques

```typescript
class MathUtils {
    static PI: number = 3.14159;

    static square(x: number): number {
        return x * x;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.square(5)); // 25
```
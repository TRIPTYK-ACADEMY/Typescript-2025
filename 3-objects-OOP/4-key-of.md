# Le mot clé Keyof en TypeScript

## 1. Introduction

Le mot clé `keyof` en TypeScript est un opérateur qui permet d'extraire les clés d'un type d'objet sous forme de type littéral. Cela est particulièrement utile pour créer des types dynamiques basés sur les propriétés d'un objet.

## 2. Utilisation de base

```typescript
interface Person {
    name: string;
    age: number;
}
type PersonKeys = keyof Person; // "name" | "age"
```

Ici, `PersonKeys` sera un type qui peut être soit `"name"` soit `"age"`.

Si je veux un tableau des clés d'un objet, je peux faire comme suit :

```typescript
const person: Person = { name: "Alice", age: 30 };
const keys: (keyof Person)[] = ["name", "age"];
```
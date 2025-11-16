# Introduction, les objets et la POO en TypeScript

## Les objets en TypeScript

### Type Object

```typescript
let person: Object = {
    name: "Amaury",
};
```

Essayez: `person.name` donnera une erreur car le type `Object` ne précise pas les propriétés disponibles.

### Type littéral d'objet

```typescript
let personne = {
    nom: "Alice",
    age: 30
};
```

Ici, TypeScript infère que `personne` a une propriété `nom` de type `string` et une propriété `age` de type `number`.

### Typage d'un objet

```typescript
let voiture: { marque: string; annee: number } = {
    marque: "Toyota",
    annee: 2020
};
```

Que faire quand objet peut avoir des propriétés optionnelles?

```typescript
let livre: { titre: string; auteur?: string } = {
    titre: "1984"
};
```

Attention que déclarer auteur comme optionnel n'a pas la même signification que de lui attribuer la valeur `undefined`.

Et des propriétés supplémentaires ?

```typescript
let utilisateur: { id: number; nom: string; [key: string]: unknown } = {
    id: 1,
    nom: "Bob",
    email: "bob@example.com"
};
```

### Avec le mot clé `type`

```typescript
type Point = {
    x: number;
    y: number;
};
```

```typescript
type Voiture = {
    marque: string;
    annee: number;
};
```

### Intersection de types

```typescript
type BookProperties = {
    nom: string;
};
type Identiable = {
    id: number;
};

type Book = BookProperties & Identiable;

let monLivre: Book = {
    id: 1,
    nom: "Le Petit Prince"
};
```
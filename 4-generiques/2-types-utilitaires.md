# Types Utilitaires en TypeScript

## Introduction

TypeScript propose des types utilitaires intégrés qui permettent de transformer et manipuler des types existants. Ces outils facilitent la réutilisation et la maintenance du code.

## Types Utilitaires Principaux

### `Partial<T>`

Rend toutes les propriétés d'un type optionnelles.

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

const updateUser = (user: User, updates: Partial<User>) => {
    return { ...user, ...updates };
};
```

### `Required<T>`

Rend toutes les propriétés obligatoires.

```typescript
interface Config {
    host?: string;
    port?: number;
}

const config: Required<Config> = {
    host: "localhost", // Obligatoire
    port: 3000         // Obligatoire
};
```

### `Readonly<T>`

Rend toutes les propriétés en lecture seule.

```typescript
interface Point {
    x: number;
    y: number;
}

const point: Readonly<Point> = { x: 10, y: 20 };
// point.x = 5; // Erreur!
```

### `Pick<T, K>`

Crée un type en sélectionnant certaines propriétés.

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Pick<User, "id" | "name">;
```

### `Omit<T, K>`

Crée un type en excluant certaines propriétés.

```typescript
type UserWithoutPassword = Omit<User, "password">;
```

### `Record<K, T>`

Crée un type objet avec des clés K et des valeurs T.

```typescript
type Role = "admin" | "user" | "guest";
type Permissions = Record<Role, string[]>;

const permissions: Permissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"]
};
```
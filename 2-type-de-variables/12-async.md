# Le type Promise et l'Asynchrone en TypeScript

## Introduction

En TypeScript, le type `Promise` est utilisé pour représenter une opération asynchrone qui peut se terminer avec une valeur ou une erreur.

## Définir une Promise

```typescript
const maPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Données chargées");
    }, 2000);
});
```

## Utiliser une Promise avec async/await

```typescript
async function fetchData(): Promise<string> {
    const data = await maPromise;
    return data;
}
```
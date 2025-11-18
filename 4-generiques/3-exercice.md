# Crée une fonction qui va lire les propriétés d'un objet de manière sécurisée en utilisant `keyof` et des génériques.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
```
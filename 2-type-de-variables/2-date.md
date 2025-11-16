
# L'objet Date en TypeScript

## Introduction

L'objet `Date` en TypeScript est identique à celui de JavaScript, mais avec l'ajout du typage statique.

## Créer une Date

```typescript
// Date actuelle
const maintenant: Date = new Date();

// Date spécifique
const dateSpecifique: Date = new Date('2024-01-15');
const dateAvecParametres: Date = new Date(2024, 0, 15); // Mois: 0-11

// Timestamp
const dateDepuisTimestamp: Date = new Date(1705276800000);
```


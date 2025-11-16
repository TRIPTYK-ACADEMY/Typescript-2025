# Imports type dans TypeScript

```typescript
import type { MaClasse } from './ma-classe';
```

L'instruction `import type` est utilisée pour importer uniquement les types (interfaces, types alias, classes, etc.) d'un module sans inclure le code associé à ces types dans le bundle final. Cela peut être utile pour optimiser la taille du code généré, surtout lorsque vous travaillez avec des modules volumineux dont vous n'avez besoin que des types.

# Imports dynamiques dans TypeScript

```typescript
async function loadModule() {
    const module = await import('./mon-module');
    module.maFonction();
}
```

Les imports dynamiques permettent de charger des modules de manière asynchrone au moment de l'exécution, plutôt qu'au moment de la compilation. Cela peut être utile pour le chargement conditionnel de modules ou pour améliorer les performances en réduisant la taille initiale du bundle.
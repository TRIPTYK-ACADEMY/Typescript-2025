# Typage des modules dans TypeScript

Il arrive parfois que vous installiez des modules externes qui ne fournissent pas de types TypeScript. Dans ce cas, vous pouvez créer un fichier de déclaration de module pour informer le compilateur TypeScript sur les types utilisés dans ce module.

## Création d'un fichier de déclaration de module

Créez un fichier avec l'extension `.d.ts`, par exemple `mon-module.d.ts`, et déclarez le module ainsi que ses types.

```typescript
declare module 'mon-module' {
    export function maFonction(param: string): number;
    export const maConstante: string;
}
```

## Utilisation du module typé

Une fois que vous avez créé le fichier de déclaration, vous pouvez importer et utiliser le module dans votre code TypeScript avec les types appropriés.

```typescript
import { maFonction, maConstante } from 'mon-module';
const resultat: number = maFonction(maConstante);
```


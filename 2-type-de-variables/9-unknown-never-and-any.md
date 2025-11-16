# LE Unknown, La Never et le Any

Le bon, la brute et le truand des types en TypeScript.
 
## Le type `unknown`

Le type `unknown` est le type sûr par défaut pour les valeurs dont le type n'est pas connu à l'avance.
Pratique quand on reçoit des données externes (API, utilisateur, etc.).
Utilise lorsqu'une fonction peut reçevoir n'importe quel type.

```typescript
function logMessage(value: unknown) {
    if (typeof value === "string") {
        // formattage spécifique aux chaînes
    }
    console.log(value);
}
```

Une fonction populaire qui retourne `unknown` est `fetch.json()`.

```typescript
const response = await fetch("https://api.example.com/data");
const data = await response.json();

//data is of type unknown
```

## Le type `never`

Le type `never` représente une valeur qui ne se produit jamais.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

Fort utile également pour le testing.

```typescript
return TransportChangeset(
    {
    id: transport?.id,
    position: transport.position,
    deliveryLocations: [],
    loadLocations: [],
    price: transport.price,
    vehicleType: transport?.vehicleType,
    type: transport?.type,
    },
    // normalement, on passe un objet avec les validations, mais ici, on ignore tout simplement.
    {} as never
);
```

## Le type `any`

Le type `any` désactive la vérification de type. À utiliser avec précaution, car il peut introduire des erreurs difficiles à détecter.

En javascript, toutes les variables sont de type `any` par défaut.

De nombreux développeurs l'utilisent de manière abusive lorsqu'ils ont la flemme de typer correctement, ce qui va à l'encontre des avantages de TypeScript. Dans ce cas mieux vaut utiliser `unknown` et faire du narrowing par la suite.

```typescript
const value: any = get(draftObject, key);
```
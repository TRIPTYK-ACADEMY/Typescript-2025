# Casting en TypeScript

Le casting permet de convertir une valeur d'un type vers un autre. (Lorsque ils sont compatibles)

```typescript
let valeur: any = "Bonjour";
let longueur: number = (valeur as string).length;
```

## Casting avec unknown

```typescript
let valeur: unknown = "Test";
let texte: string = valeur as string;
```

## Assertions de type non-null

Utiliser `!` pour indiquer qu'une valeur n'est pas null/undefined :

```typescript
let element = document.getElementById("myId")!;
```

## Casting de types littéraux

```typescript
let statut = "actif" as const;
// Type: "actif" (et non string)
```

## ⚠️ Attention

Le casting ne fait aucune vérification à l'exécution. Assurez-vous que le type est correct.

```typescript
let nombre: any = 42;
let texte = nombre as string; // Erreur potentielle!
```

## Casting abusif

Ci-dessous une compilation de castings abusifs à éviter :

Ici: on ignore que la propriété `role` peut être `undefined`.
```typescript
  get canEditInvoicePreference() {
    return ALLOWED_TO_INVOICE_PREFERENCE.includes(this.user?.role as Roles);
  }
```

Ici: on ignore que `err` peut ne pas avoir de propriété `errors`.
```typescript
    (err as any).errors.forEach((error: any) => {
        this.flashMessages.danger(
            this.intl.t(
                `setting.bank-accounts.errors.${error.status.toString()}`,
                {
                    name: this.currentDeleteElement?.name,
                }
            )
        );
    });
```


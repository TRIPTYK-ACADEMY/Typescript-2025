# Types primitifs en TypeScript

## string - chaînes de caractères

```typescript
const nom: string = "Alice";
const prenom: string = 'Bob';
const template: string = `Bonjour ${nom}`;
```

## number - nombres (entiers et décimaux)

```typescript
const age: number = 25;
const prix: number = 19.99;
const hexadecimal: number = 0xf00d;
```

## boolean - valeurs booléennes

```typescript
const estActif: boolean = true;
const estConnecte: boolean = false;
```

## bigint - grands entiers

```typescript
const grandNombre: bigint = 9007199254740991n;
const tresgrandNombre: bigint = BigInt("123456789012345678901234567890");
```

## symbol - identifiants uniques

```typescript
const symbole1: symbol = Symbol("description");
const symbole2: symbol = Symbol("description");
```

## undefined - valeur non définie

```typescript
const indefini: undefined = undefined;
```

## null - valeur nulle

```typescript
const nul: null = null;
```

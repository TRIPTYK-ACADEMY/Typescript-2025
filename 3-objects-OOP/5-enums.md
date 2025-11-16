# Les Enums en TypeScript

## Introduction

Les **enums** (énumérations) permettent de définir un ensemble de constantes nommées, rendant le code plus lisible et maintenable.

## Enum numérique

```typescript
enum Direction {
    Nord,
    Sud,
    Est,
    Ouest
}

let dir: Direction = Direction.Nord;
console.log(dir); // 0
```

Par défaut, les valeurs commencent à 0.

## Enum avec valeurs personnalisées

```typescript
enum HttpStatus {
    OK = 200,
    NotFound = 404,
    ServerError = 500
}

let status: HttpStatus = HttpStatus.OK;
console.log(status); // 200
```

## Enum de chaînes

```typescript
enum Couleur {
    Rouge = "RED",
    Vert = "GREEN",
    Bleu = "BLUE"
}

let favori: Couleur = Couleur.Rouge;
console.log(favori); // "RED"
```

## Accès inverse

```typescript
enum Role {
    Admin = 1,
    User,
    Guest
}

console.log(Role[1]); // "Admin"
```

## Paranthèses autour des enums

L'utilisation des enums fait débat en TypeScript. Car ceux-ci génèrent du code JavaScript supplémentaire parfois confusant. Pour cette raison, certains développeurs préfèrent utiliser des objets littéraux ou des types union à la place.

```typescript
enum Roles {
    Admin,
    User,
    Guest
}
```

devient en javaScript :

```javascript
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Guest"] = 2] = "Guest";
})(Roles || (Roles = {}));
```
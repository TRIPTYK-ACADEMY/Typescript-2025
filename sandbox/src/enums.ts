enum Direction {
    HAUT,
    BAS,
    GAUCHE,
    DROITE,
    UN_PEU_A_GAUCHE,
    PAS_TROP_A_DROITE
}

console.log(Direction);
console.log(Direction.BAS);
console.log(Direction[Direction.DROITE]);

enum Role2 {
    Admin = "admin",
    Moderator = "moderator"
}

type Role3 = "admin" | "moderator";

type Role4 = {
    Admin: 'admin',
    User: 'user',
    Moderator: 'moderator'
}

console.log(Role2);


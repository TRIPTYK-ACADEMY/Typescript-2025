"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["HAUT"] = 0] = "HAUT";
    Direction[Direction["BAS"] = 1] = "BAS";
    Direction[Direction["GAUCHE"] = 2] = "GAUCHE";
    Direction[Direction["DROITE"] = 3] = "DROITE";
    Direction[Direction["UN_PEU_A_GAUCHE"] = 4] = "UN_PEU_A_GAUCHE";
    Direction[Direction["PAS_TROP_A_DROITE"] = 5] = "PAS_TROP_A_DROITE";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.BAS);
console.log(Direction[Direction.DROITE]);
var Role2;
(function (Role2) {
    Role2["Admin"] = "admin";
    Role2["Moderator"] = "moderator";
})(Role2 || (Role2 = {}));
console.log(Role2);

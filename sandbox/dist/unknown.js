"use strict";
function log(trucALogger) {
    if (typeof trucALogger === "string") {
        console.log("C'est un string");
    }
    if (typeof trucALogger === "number") {
        console.log("c'est un nombre");
    }
}

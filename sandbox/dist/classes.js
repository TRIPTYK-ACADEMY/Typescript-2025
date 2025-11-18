"use strict";
// F2 OU "renommer" dans VSCODE pour renommer une variable
class Person {
    prop;
    city;
    age = 14;
    static makePersonFromMons(prop, age) {
        return new Person(prop, age, "Mons");
    }
    constructor(prop, age, city) {
        this.prop = prop;
        this.city = city;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    setAge(nouvelAge) {
        this.checkIfAgeIsValid(nouvelAge);
        this.age = nouvelAge;
    }
    setLocation(location) {
        this.city = location;
    }
    hello() {
        console.log("Hello");
    }
    checkIfAgeIsValid(nouvelAge) {
        if (nouvelAge < 0) {
            throw new Error("Age impossible");
        }
    }
}
Person.makePersonFromMons("Amaury", 14);
// class UserProfile {
//     private uniqueId: number;
//     public constructor(
//         uniqueId: number
//     ) {
//         this.uniqueId = uniqueId;
//     }
//     printAsJSON() {
//         return JSON.stringify({
//             uniqueId: this.uniqueId
//         })
//     }
// }
const person1 = new Person("prop", 14);
const person2 = new Person("prop", 14, "Mons");
person1.hello();
person1.setLocation("Mons");
// person1.setAge(887985); //ça passe
// person1.setAge(-4555); // ça passe pas t mort
person1.city;
class Temperatoure {
    temp;
    constructor(temp) {
        this.temp = temp;
    }
    get temperature() {
        return this.temp;
    }
    set temperature(value) {
        if (value < -273.15) {
            throw new Error("Impossible de descendre en dessous du 0 absolu");
        }
        this.temp = value;
    }
}
const temp = new Temperatoure(50);
temp.temperature = -700;
console.log(temp.temperature);
class Article {
    title;
    content;
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    static async makeArticle() {
        // on peut faire des appels asynchrones ici
        return new Article("Contenu", "Blah lorem ipsum");
    }
}
// const article = await Article.makeArticle();

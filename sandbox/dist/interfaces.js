"use strict";
const user = {
    name: "blah",
    age: 14,
    print() {
    },
    toJSON() {
        return JSON.stringify({
            name: this.name,
            age: this.age
        });
    }
};
class UserModel {
    age;
    color() {
    }
    constructor(age) {
        this.age = age;
    }
    name;
    print() {
    }
    toJSON() {
        return JSON.stringify({
            age: this.age
        });
    }
}
const person = {
    age: 0,
    print: function () {
        throw new Error("Function not implemented.");
    },
    toJSON: function () {
        throw new Error("Function not implemented.");
    }
};
const keys = ['age', 'print', 'toJSON'];

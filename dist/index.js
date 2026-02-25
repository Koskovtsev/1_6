"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstWord(a) {
    return a.split(/ +/)[0]?.length ?? 0;
}
function test() {
    const a = {
        name: ['V', 'a', 's', 'y', 'a'],
        surname: ['P', 'u', 'p', 'k', 'i', 'n'],
    };
    console.log(getUserNamings(a));
}
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a) {
    return a?.products?.map(prod => prod?.name) || [];
}
// easy way is using 'as' keyword
// hard way is ?...
// function hey(a: { name: Function, cuteness?: number, coolness?: number }) {
//     return "hey! i'm " + a.name();
// }
// hey({name: () => "roman", cuteness: 100})
// hey({name: () => "vasyl", coolness: 100})
class Pet {
    surname;
    constructor(name) {
        this.surname = name;
    }
    name() {
        return this.surname;
    }
    ;
}
class Cat extends Pet {
    isFast;
    constructor(name, isFast) {
        super(name);
        this.isFast = isFast;
    }
}
class Dog extends Pet {
    age;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
function hey(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("snizhok", true);
let b = new Dog("sirko", 333);
hey(a);
hey(b);
console.log('all is OK!');
//# sourceMappingURL=index.js.map
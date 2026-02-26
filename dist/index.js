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
// function hey(abstractPet: Pet) {
//     return "hey! i'm " + abstractPet.name();
// }
// let a = new Cat("snizhok", true)
// let b = new Dog("sirko", 333)
// hey(a)
// hey(b)
function hey(a) {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? (" cuteness: " + a.cuteness) : (" coolness: " + a.coolness));
}
hey({
    name: () => "snizhok",
    type: "cat",
    cuteness: 100
});
hey({
    name: () => "sirko",
    type: "dog",
    coolness: 100
});
function handMadeFunc(a) {
    const elementsArray = Object.keys(a);
    const result = elementsArray.reduce((acc, elem) => {
        const value = a[elem]?.cvalue;
        switch (typeof value) {
            case 'undefined': return acc + 2021;
            case 'number': return acc + value;
            case 'string':
                const number = +value;
                return acc + (Number.isNaN(number) ? 2021 : number);
            case 'object': return value !== null ? acc + handMadeFunc(value) : acc;
            default: return acc;
        }
    }, 0);
    return result;
}
const a = {
    hello: { cvalue: 1 },
    world: {
        cvalue: {
            yay: { cvalue: "2" },
            some: { cvalue: 0 }
        }
    }
};
console.log(handMadeFunc(a));
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k]?.cvalue;
        if (typeof elem === undefined)
            return 2021;
        if (typeof elem === 'string') {
            const number = +elem;
            return Number.isNaN(number) ? 2021 : number;
        }
        if (typeof elem === 'object')
            return summ(elem);
        return elem;
    });
    let sum = 0;
    x.forEach(num => sum += num ?? 0);
    return sum;
}
console.log(summ(a));
console.log('all is OK!!');
//# sourceMappingURL=index.js.map
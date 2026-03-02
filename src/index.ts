function getFirstWord(a: string): number {
    return a.split(/ +/)[0]?.length ?? 0;
}


function test() {
    const a = {
        name: ['V', 'a', 's', 'y', 'a'],
        surname: ['P', 'u', 'p', 'k', 'i', 'n'],
    }
    console.log(getUserNamings(a));
}

function getUserNamings(a: { name: string[], surname: string[] }) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a?: { products?: { name: string }[] }) {
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
    surname: string;

    constructor(name: string) {
        this.surname = name;
    }
    name() {
        return this.surname;
    };
}

class Cat extends Pet {
    isFast: boolean;

    constructor(name: string, isFast: boolean) {
        super(name);
        this.isFast = isFast;
    }
}


class Dog extends Pet {
    age: number;

    constructor(name: string, age: number) {
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


function hey(a: { name: Function, type: string, cuteness?: number, coolness?: number }) {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? (" cuteness: " + a.cuteness) : (" coolness: " + a.coolness))
}
hey({
    name: () => "snizhok",
    type: "cat",
    cuteness: 100
})
hey({
    name: () => "sirko",
    type: "dog",
    coolness: 100
})

// console.log(hey({
//     name: () => "snizhok",
//     type: "cat",
//     cuteness: 100
// }));
// console.log(hey({
//     name: () => "sirko",
//     type: "dog",
//     coolness: 100
// }));

// google for Record type
// function stringEntries(a: string[] | Record<string, any>) {
//     return Array.isArray(a) ? a : Object.keys(a)
// }

// async function world(a: number) {
//     return "*".repeat(a)
// }
// const hello = async () => {
//     return await world(10)
// }
// hello().then(r => console.log(r)).catch(e => console.log("fail"))
// console.log(hello());

interface BigObject {
    [key: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

type AObject = Record<string, undefined | {
    cvalue: AObject | number | undefined | string
}>;

function summ(a: AObject) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k]?.cvalue;
        if (typeof elem === undefined) return 2021;
        if (typeof elem === 'string') {
            const number = +elem;
            return Number.isNaN(number) ? 2021 : number;
        }
        if (typeof elem === 'object') return summ(elem);
        return elem;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i] || 0;
    }
    return sum;
}


function handMadeFunc(a: AObject) {
    const result: number = Object.keys(a).reduce((acc, elem) => {
        const value = a[elem]?.cvalue;
        switch (typeof value) {
            case 'undefined': return acc + 2021;
            case 'number': return acc + value;
            case 'string': const number = +value;
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
        cvalue:
        {
            yay: { cvalue: "2" },
            some: { cvalue: 0 }
        }
    }
}
console.log(handMadeFunc(a));


console.log(summ(a));
console.log('all is OK!!');

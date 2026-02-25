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

function hey(abstractPet: Pet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("snizhok", true)
let b = new Dog("sirko", 333)
hey(a)
hey(b)


console.log('all is OK!');

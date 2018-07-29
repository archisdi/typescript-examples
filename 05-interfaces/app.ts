// basic interfaces

interface NamedPerson {
    name: string;
    age? : number; // optional property
    [propName: string]: any; // flexible keyname with any types;
    greet(name: string): void; // method interface
}

function greet(person: NamedPerson): void {
    console.log(`hello, ${person.name} !`);
}

function changeName(person: NamedPerson): void {
    person.name = 'farah';
}

const man = {
    name: 'archie',
    sport: 'esport',
    greet(name: string){
        console.log(name)
    }
};

greet(man);
changeName(man);
greet(man);
man.greet('andry');

class Person implements NamedPerson{
    public name: string;
    public age: number;
    public sports: string[];
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public greet(name: string): void{
        console.log(`hola ${name}`);
    }
}

const person = new Person('novetri', 22);
person.greet('angga');

// function types
interface doubleValueFunc {
    (val1: number, val2: number): number
}

let doubleFunc: doubleValueFunc;

doubleFunc = (num: number, num2: number): number => {
    return (num + num2) * 2;
}
console.log(doubleFunc(10, 2));

// interface inheritance

interface AgedPerson extends NamedPerson{
    age: number;
}

let oldPerson: AgedPerson;
oldPerson = {
    age: 22,
    name: 'ismojo',
    greet(name: string){
        console.log(name);
    }
}
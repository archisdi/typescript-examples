// class definition
class Person {
    public name: string;
    private type: string;
    protected age: number = 22;

    constructor(name: string, public username: string){
        this.name = name;
    }

    public printAge(): void {
        console.log(this.age);
    }

    public setType(type: string): void {
        this.type = type;
    }
}

let person = new Person('archie','archisdiningrat');
person.setType('cool guy');

console.log(person);
person.printAge();


// class inheritance
class Giant extends Person {
    constructor(name: string){
        super(name, `giant-${name}`);
        this.age = 99; // protected refers to super
    }
}

let giant = new Giant('angga');
console.log(giant);

// setter and getter
class Plant{
    private _species: string = 'default';

    set species(value: string){
        if (value.length > 3){
            this._species = value;
        } else {
            this._species = 'default';
        }
    }

    get species(){
        return this._species;
    }
}

const plant = new Plant();
console.log(plant.species);

plant.species = 'AB';
console.log(plant.species);

plant.species = 'Green';
console.log(plant.species);

// static properties and methods
class Helper {
    static PI: number = 3.14;
    static calculateCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(Helper.PI);
console.log(Helper.calculateCircumference(22));

// abstract class
abstract class Project {
    projectName: string = 'default';
    budget: number;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void{
        this.projectName = name
    }
}

const project = new ITProject();
project.changeName('kbms');

// private constructors and singletons
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name:string) {}

    static getInstance(){
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
let only = OnlyOne.getInstance();
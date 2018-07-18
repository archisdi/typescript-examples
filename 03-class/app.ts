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
    }
}

let giant = new Giant('angga');
console.log(giant);
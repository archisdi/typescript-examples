// string
let myName = 'Max';

// number
let age = 22;

// boolean
let hasHooby = true;

// assign type
let myRealAge: number;
myRealAge = 22;

// array
let hobbies: any[] = ["gaming", "coding", "swimming"];
hobbies = [100, 200, 300];

// tuples
let address: [string, number] = ["pettarani", 99];

// enum
enum Color {
    Gray,
    Green = 100,
    Blue
}
let myColor: Color = Color.Green;

// any
let car: any = 'bmw';
car = {
    brand: 'bmw',
    series: 3
}

// functions
function getName(name): string{
    return name;
}

// void
function sayHello(): void{
    console.log('hello')
}

// argument types
function multiply(val1: number, val2: number): number{
    return val1 * val2;
}

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;

// objects
let user: { name: string, age: number };
user = {
    name: 'archie',
    age: 22
}

// complex object
let complex: { data: number[], output: (all: boolean) => number[] };
complex = {
    data: [1,2,4],
    output: function (all: boolean): number[] {
        return this.data
    }
}

// custom types (alias)
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex;
complex = {
    data: [1,2,4],
    output: function (all: boolean): number[] {
        return this.data
    }
}

// multiple types (union)
let myRealRealAge: number | string;
myRealRealAge = 22;
myRealRealAge = "22";

// check types
let finalValue = "A string";
if (typeof finalValue == "string"){
    console.log('hola')
}

// never
function neverReturns(): never {
    throw new Error('An Error!');
}

// nullable || set tsconfig strictNullChecks = true
let canBeNull: number | null;
canBeNull = 12;
canBeNull = null;
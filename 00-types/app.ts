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


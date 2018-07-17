// let and const
let variable = 'archie';
console.log(variable);
variable = 'test 123'

const maxLevels = 100;
console.log(maxLevels);

// Block Scope
function reset(): void{
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
const addNumber = function(number1: number, number2: number): number{
    return number1 + number2
}

const multiplyNumber = (number1: number, number2: number): number => number1 * number2;

const greet = ():void => {
    console.log('hola amigo !');
};

// Default Parameter with Type
const countDown = (start: number = 10): void => {
    while (start > 0){
        start--;
        console.log(start);
    }
    console.log('done');
}
countDown(5);

// Rest and Spread
const numbers = [1,10,99,-5];
console.log(Math.max(...numbers));

function makeArray(...args: number[]){
    return args;
}
console.log(makeArray(1,2,3,4,5,6));

// Destructuring Arrays
const myHobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby2);

// Destructuring Object
const userData = {
    username: 'archie', age: 22
}
const { username, age: myAge } = userData;
console.log(username + ' - ' + myAge);
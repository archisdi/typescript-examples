// string
var myName = 'Max';
// number
var age = 22;
// boolean
var hasHooby = true;
// assign type
var myRealAge;
myRealAge = 22;
// array
var hobbies = ["gaming", "coding", "swimming"];
hobbies = [100, 200, 300];
// tuples
var address = ["pettarani", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
// any
var car = 'bmw';
car = {
    brand: 'bmw',
    series: 3
};
// functions
function getName(name) {
    return name;
}
// void
function sayHello() {
    console.log('hello');
}
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
// function types
var myMultiply;
myMultiply = multiply;
// objects
var user;
user = {
    name: 'archie',
    age: 22
};
// complex object
var complex;
complex = {
    data: [1, 2, 4],
    output: function (all) {
        return this.data;
    }
};
var complex2;
complex = {
    data: [1, 2, 4],
    output: function (all) {
        return this.data;
    }
};
// multiple types (union)
var myRealRealAge;
myRealRealAge = 22;
myRealRealAge = "22";
// check types
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log('hola');
}
// never
function neverReturns() {
    throw new Error('An Error!');
}
// nullable || set tsconfig strictNullChecks = true
var canBeNull;
canBeNull = 12;
canBeNull = null;

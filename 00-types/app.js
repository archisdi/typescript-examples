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

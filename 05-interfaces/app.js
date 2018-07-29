// basic interfaces
function greet(person) {
    console.log("hello, " + person.name + " !");
}
function changeName(person) {
    person.name = 'farah';
}
var man = {
    name: 'archie',
    sport: 'esport',
    greet: function (name) {
        console.log(name);
    }
};
greet(man);
changeName(man);
greet(man);
man.greet('andry');
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (name) {
        console.log("hola " + name);
    };
    return Person;
}());
var person = new Person('novetri', 22);
person.greet('angga');
var doubleFunc;
doubleFunc = function (num, num2) {
    return (num + num2) * 2;
};
console.log(doubleFunc(10, 2));
var oldPerson;
oldPerson = {
    age: 22,
    name: 'ismojo',
    greet: function (name) {
        console.log(name);
    }
};

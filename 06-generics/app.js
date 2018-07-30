// simple generic
function echo(data) {
    return data;
}
console.log(echo('archie'));
console.log(echo(27));
console.log(echo({ name: 'archie', age: 22 }));
// better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('archie').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'archie', age: 22 }));
// built-in generics
var testResults = [1, 2, 3];
testResults.push(4);
console.log(testResults);
// arrays
function printAll(args) {
    args.forEach(function (item) {
        console.log(item);
    });
}
printAll(['apple', 'banana', 'tes']);
// generic types
var echo2 = echo; // wtf yoo
console.log(echo2('yoloooo'));
// generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

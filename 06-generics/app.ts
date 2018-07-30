// simple generic
function echo(data: any){
    return data;
}

console.log(echo('archie'));
console.log(echo(27));
console.log(echo({ name: 'archie', age: 22}));


// better generic
function betterEcho<T>(data: T){
    return data;
}

console.log(betterEcho('archie').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'archie', age: 22}));

// built-in generics
const testResults: Array<number> = [1, 2, 3];
testResults.push(4);
console.log(testResults);

// arrays
function printAll<T>(args: T[]){
    args.forEach(item => {
        console.log(item);
    });
}
printAll<string>(['apple', 'banana', 'tes']);

// generic types
const echo2: <T>(data: T) => T = echo; // wtf yoo
console.log(echo2<string>('yoloooo'));

// generic class
class SimpleMath<T extends number | string, U extends number | string>{
    baseValue: T;
    multiplyValue: U;
    calculate(): number{
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<number, number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
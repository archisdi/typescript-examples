function logged(constructorFn: Function){
    console.log(constructorFn);
}

@logged
class Person {
    constructor(){
        console.log('hi');
    }
}

// factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(false)
class Car {

}

// advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = 'green plant';
}
const plant = new Plant();
(<any>plant).print();


// method and property decorator
function editable(value: boolean){
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}

function overwtitable(value: boolean): any{
    return function(target: any, propName: string){
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

class Project{
    @overwtitable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget(){
        console.log(1000);
    }

}

const project = new Project('kbms');
project.calcBudget();
project.calcBudget = function(){
    console.log(2000);
}
project.calcBudget();

// parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number){
    console.log(`Target : ${target}`);
    console.log(`Method : ${methodName}`);
    console.log(`Index  : ${paramIndex}`);
}

class Course {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean){
        if (printAll){
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course("js");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);

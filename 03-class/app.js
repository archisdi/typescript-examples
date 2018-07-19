var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class definition
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 22;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person('archie', 'archisdiningrat');
person.setType('cool guy');
console.log(person);
person.printAge();
// class inheritance
var Giant = /** @class */ (function (_super) {
    __extends(Giant, _super);
    function Giant(name) {
        var _this = _super.call(this, name, "giant-" + name) || this;
        _this.age = 99; // protected refers to super
        return _this;
    }
    return Giant;
}(Person));
var giant = new Giant('angga');
console.log(giant);
// setter and getter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green';
console.log(plant.species);
// static properties and methods
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calculateCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log(Helper.PI);
console.log(Helper.calculateCircumference(22));
// abstract class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var project = new ITProject();
project.changeName('kbms');
// private constructors and singletons
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var only = OnlyOne.getInstance();

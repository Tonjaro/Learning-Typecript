"use strict";
//Basic Types
let id = 5;
let company = 'Google';
let isPublished = true;
//Any types can be assigned other types after declaration
let x = 'Hello';
x = 1;
// Type of values in the array are determined by the name before the []
let ids = [1, 2, 3, 4, 5];
//Tuple
let person = [
    1, 'Tony', true
];
//Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Jessie'],
    [3, 'Jessica']
];
//Unions are variables that are able to hold more than one type
let pid = 'apple';
pid = 1;
const user = {
    id: 1,
    name: 'Tony'
};
//Assertions used to tell the code what type the variable is
let cid = 1;
let newCid = cid;
//Functions in typescript 
function addTwo(x, y) {
    return x + y;
}
let fname = 'Tony';
let lname = 'Bonki';
console.log(fname + ' ' + lname);
/* When you do not need to return a value in a funciton you
can simply return void */
function log(messege) {
    console.log(messege);
}
log(true);
const user1 = {
    id: 1,
    name: 'Tony',
    age: 20
};
const add = (x, y) => x + y;
console.log(add(5, 5));
// Classes THese are used to create multiple objects
class Person {
    //Contructoris run whenever an object is instatiated in that class
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(this.name + ' ' + 'has spawned');
    }
    spawn() {
        return `${this.name} has spawned with an ID of ${this.id}`;
    }
}
const tony = new Person(1, 'Tony');
console.log(tony.spawn());
//Extending Classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(1, 'Tonjaro', 'Front-end Website Dev support');
console.log(emp1.name, emp1.position, emp1.spawn);

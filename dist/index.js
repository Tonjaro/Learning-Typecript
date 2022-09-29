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
//Interfaces a specific structure to an object or a function

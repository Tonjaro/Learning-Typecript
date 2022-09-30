//Basic Types
let id: number = 5
let company: string = 'Google'
let isPublished: boolean = true

//Any types can be assigned other types after declaration
let x: any = 'Hello'
x = 1

// Type of values in the array are determined by the name before the []
let ids: number[] = [1,2,3,4,5]

//Tuple
let person: [number, string, boolean] = [
    1, 'Tony', true
]

//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'John'],
    [2, 'Jessie'],
    [3, 'Jessica']
]

//Unions are variables that are able to hold more than one type

let pid: string|number = 'apple'
pid = 1

//Objects

type User ={
    id:number,
    name:string
}

const user: User ={
    id:1,
    name: 'Tony'
}

//Assertions used to tell the code what type the variable is

let cid: any = 1
let newCid = cid as string

//Functions in typescript 

function addTwo(x: number, y:number): number{
    return x + y 
}

let fname: string = 'Tony'
let lname: string = 'Bonki'

console.log(fname + ' ' + lname)

/* When you do not need to return a value in a funciton you 
can simply return void */

function log(messege:string|number|boolean){
    console.log(messege)
}

log(true)

//Interfaces a specific structure to an object or a function

interface UserInterface {
    id:number,
    name:string,
    age?:number
}

const user1: UserInterface = {
    id:1,
    name:'Tony',
    age:20
}

interface MathFunc {
    (x:number,y:number,): number
}

const add: MathFunc = (x: number, y:number): number => x + y

console.log(add(5, 5))

// Classes THese are used to create multiple objects

class Person {
    private id:number //Data modifier to change varible to private you can only access the varible within th efile
    name:string // You can only acess the variable within its class or extended classes

    //Contructoris run whenever an object is instatiated in that class
    constructor(id:number, name:string){
        this.id = id
        this.name = name
        console.log(this.name + ' ' +  'has spawned');
        
    }

    spawn(){
        return `${this.name} has spawned with an ID of ${this.id}`
    }

}

const tony = new Person(1, 'Tony')
console.log(tony.spawn());


//Extending Classes

class Employee extends Person{
    position:string
    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position =  position
    }
}

const emp1 = new Employee(1, 'Tonjaro', 'Front-end Website Dev support')
console.log(emp1.name, emp1.position, emp1.spawn);

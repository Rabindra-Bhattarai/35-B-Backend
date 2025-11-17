let message:string = "Hello";
console.log(message);
//message = 0 //Error


//primitive types
let booleanVar: boolean = true;
let numberVar: number = 42;
let symbolVar: symbol = Symbol("unique");
let nullVar: null = null;
let undefinedVar: undefined = undefined;


let anyVar: any ="Could be anything too";
anyVar = anyVar +100; //Error


let unknownVar: unknown = "Could be anything too";
//unknownVar = unknownVar +100; //Error
//unknown is type assertion


let scores:number[] = [90, 80, 70];
console.log(scores)
//tuples
let tupleVar:[string, number] = ["Rabin", 100];
console.log(tupleVar)
//tupleVar = [100, "Rabin"]; //Error


//union
let id: string | number;
id = "Hello";
console.log(id);
id = 123;
console.log(id);
//id = true; //Error

//functions
function add(num1: number, num2: number): string {
    let sum: number = num1 + num2;
    return `The sum is ${sum}`;
}

let result: string = add(10, 20);
console.log(result);

const greet = (name: string = "Guest"): void => { 
    console.log(`Hello, ${name}`);
}

greet(); //name is optional if default value

//Objeect Deinition
//1. Object Literal
let person: { name: string; age: number } = {
    name: "Rabin",
    age: 30
    //isActive: true //Error
};
console.log(person, person.name);

//2. Interface
interface product{
    id: number;
    name: string;
    price: number;
    description?: string; //optional
}

const laptop: product = {
    id: 1,
    name: "Laptop",
    price: 1500
};
console.log(laptop);


type Student ={
    id: number;
    name: string;
    grade: string;
    product?: product; //optional
}

let student1: Student = {
    id: 101,
    name: "sarjajajakkkk",
    grade: "A",
    product: laptop
};

console.log(student1);




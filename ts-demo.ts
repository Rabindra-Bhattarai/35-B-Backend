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


//Generic
function identity <T> (arg:T)  :T {
    return arg;
}

//DataType injected at call time
let output1 = identity<string>("myString");
console.log(output1);
let output2 = identity<number>(100);
console.log(output2);



//enum 
//named constant
enum Role {
    Admin,
    User,
    Guest
}

let userrole:Role = Role.Admin;
console.log(userrole);
console.log(userrole==Role.Admin); // constant check


let userRoleName: string = "admin";
console.log(userRoleName == "Admin"); //case sensitive check


    
//generic usecase
interface user{
    id: number;
    name: string;
    role: Role;
}

let optUser: Partial<user> = {
    name:"Dave"
};

//every attribute is optional
console.log(optUser);
let readonlyUser: Readonly<user> = {
    id:1,
    name:"Eve",
    role: Role.User
};
//readonlyUser.id = 2; //Error
console.log(readonlyUser);












//Task

//create enum for carType: sedan. SUV, Truck, Coupe.
enum CarType {
    Sedan,
    SUV,
    Truck,
    Coupe
}

//Create a type carModel
type CarModel = {
    id: number;
    name: string;
    type: CarType;
    description?: string;
}

//create an interface for a car with properties:
//make string or number, mode: carModel,
//year:number
//type:carTpe, and isElectric(optional) bpplean or number or string
interface Car {
    make: string | number;
    model: CarModel;
    year: number;
    type: CarType;
    isElectric?: boolean | number | string;
}

//create a array of cars with ar least 3 car objects.
let cars: Car[] = [
    {
        make: "Toyota",
        model: {
            id: 1,
            name: "Camry",
            type: CarType.Sedan
        },
        year: 2020,
        type: CarType.Sedan,
        isElectric: false
    },
    {
        make: "Ford",
        model: {
            id: 2,
            name: "Explorer",
            type: CarType.SUV
        },
        year: 2021,
        type: CarType.SUV,
        isElectric: "No"
    },
    {
        make: "Tesla",
        model: {
            id: 3,
            name: "Model S",
            type: CarType.Sedan
        },
        year: 2022,
        type: CarType.Sedan,
        isElectric: true
    }
];

//filter the cars whose year is greater that 2015
let recentCars = cars.filter(car => car.year > 2015);
console.log(recentCars);
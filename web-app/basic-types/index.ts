// Let vs const
let number: number = 5;
number = 10;

const message: string = "Welcome";

// String
let welcomeMessage: string = "Hello, Peter!";
let test: string = 'Ivan';

let welcomeMessageLenght: number = welcomeMessage.length;

//console.log("welcomeMessageLenght",welcomeMessageLenght);

// String interpolation
let welcomeMessageDetails: string = `My welcomeMessage length is ${welcomeMessageLenght}`;
let userWelcomeMessage: string = `Welcome, ${test}`;

// Number
let firstNumber: number = 5;
let secondNumber: number = 10;

//Number math operation
let add: number = firstNumber + secondNumber;
let substract: number = firstNumber - secondNumber;
let multiply: number = firstNumber * secondNumber;
let divide: number = firstNumber / secondNumber;

// Boolean(true/false)
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;

// Any 
let stringValue: any = 'Hello';
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

//Ternary operator
const isPositiveNum = 5 > 0 ? "The number is positive" : "The number is negative";

const age: number = 30;
const myName: string = "Pesho";

const personDescription =
    age < 40
        ? `${myName} is younger than 40. He is ${age} years old.`
        : `${myName} is older than 40. He is ${age} years old`;

const personName = `His name is "${myName}".`;

//If Else Statement

if (age < 40) {
    console.log('Age are lower than 40');
}
else {
    console.log("Age are grater than 40");
}

const testNum: number = 50;

if (testNum <= 10) {
    console.log("The number is lower than 10.");
} else if (testNum > 100) {
    console.log("The number is greater than 100.");
} else if (testNum > 80) {
    console.log("The number is greater than 80.");
} else {
    console.log("The number is between 10 and 100.");
}

//Type Alias
type PersonInfoType = string | number;

const personNameInf: PersonInfoType = "Ivan";
const personAgeInf: PersonInfoType = 25;

type Status = "approved" | "rejected" | "pending" | "fullfilled";

const currentStatus: Status = "fullfilled";

type PersonData = {
    name: string;
    lastName: string;
    age: number;
    city: "Sofia" | "Plovdiv" | "Varna";
};




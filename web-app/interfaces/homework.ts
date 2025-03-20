/*1. Create a TypeScript interface named Person that represents a person with the following properties:
• name (string)
• lastName (string)
• age (number)
• email (string)
• phoneNumber (number)*/
export interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

/*2. Create a TypeScript interface named PersonInfo that Extends Person type from the previous exercise and add the following properties:
• country (optional string property)
• greeting (optional method that return welcome message)*/
export interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

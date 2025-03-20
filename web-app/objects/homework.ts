//3. Create an object of type Person using the interface from Exercise 1. Declare a variable person1 of type Person.
import { PersonInfo } from "../interfaces/homework";
import { Person } from "../interfaces/homework";

const person1: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    age: 25,
    email: "ivan.ivanov@gmail.com",
    phoneNumber: 359888123123,
};

//4. Create an object of type PersonInfo using the interface from Exercise 2. Declare a variable person2 of type PersonInfo.
const person2: PersonInfo = {
    name: "Marin",
    lastName: "Marinov",
    age: 37,
    email: "m.marinov@gmail.com",
    phoneNumber: 359888444555,
    country: "Bulgaria",
    greeting: function () {
        return 'Welcome'
    },
}

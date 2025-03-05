
type Role = {
    role: "manager" | "founder"
}
type Permissions = {
    permissions: "admin" | "user"
}
type User = Role & Permissions;

const user: User = {
    role: "founder",
    permissions: "admin"
};

//Object types with Interfaces
interface Animal {
    species: string;
    breed?: string;
    age: number;
    weight?: number;
    name: string;
}

const animal: Animal = {
    species: "rabbit",
    age: 9,
    weight: 3,
    name: "Oly"
};


interface Cars {
    color: string;
    wheels: number;
    transmission: "manual" | "automatic";
    fuelType: "diesel" | "gasoline";
    startEngine: () => string;
}

const car: Cars = {
    color: "white",
    wheels: 4,
    transmission: "manual",
    fuelType: "diesel",
    startEngine: function () {
        return 'Start the engine'
    },
};

// get object keys
const keys = Object.keys(car);

// get object values
const values = Object.values(car);
console.log("values",values);

// assign to objects in one
const colorObj = {color: 'black'}
const backgroundObj = {background: 'white'}

const assignedObj = Object.assign({}, colorObj, backgroundObj);
console.log("assignedObj", assignedObj);

export { };
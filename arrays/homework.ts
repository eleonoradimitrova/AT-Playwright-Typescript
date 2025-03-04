// Create an array of strings and add a new element at the end of the array. Log the result.
let sports: string[] = ['Football', 'Tennis', 'Swimming', 'Basketball', 'Gymnastics'];
sports.push("Skiing");
console.log("The array after adding element ate the end is: " + sports);

// Create an array of numbers and remove the first element from the array. Log the result.
let numsArray: number[] = [1, 2, 3, 4, 5, 6];
numsArray.shift();
console.log("The array after removing the first element is: " + numsArray);

//  Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.
numsArray.unshift(1);
let divideNumbers: number[] = numsArray.map((element: number) => element / 2);
console.log("The array with elements divided by 2 is: " + divideNumbers);

// Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let filteredArray: number[] = [3, 7, 1, 9, 12, 4];
let filtteredNumbersArray = filteredArray.filter((element) => element > 5);
console.log("Numbers greater than 5 are: " + filtteredNumbersArray);

// Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let sortedArray: number[] = [9, 3, 7, 2, 8, 5];
sortedArray.sort();
console.log("Sorted array is: " + sortedArray);

// Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let fruitsArray: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let extractElementsArray = fruitsArray.slice(0, 3);
console.log("tThe first three elements are: " + extractElementsArray);

// Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let vehiclesArray: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
let removedElementsArray = vehiclesArray.splice(2, 2);
console.log("The removed elements are: " + removedElementsArray);
console.log("The array without removed elements is: " + vehiclesArray);

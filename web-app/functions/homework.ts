// Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(firstNumber: number, secondNumber: number, thirdNumber: number): number {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return firstNumber;
    }
    if (secondNumber > thirdNumber) {
        return secondNumber;
    }
    return thirdNumber;
}
console.log("The largest number is " + findLargest(9, 4, 3));
// Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number, converter: number = 2.54): number {
    return inches * converter;
}
console.log("The result with default parameter is " + convertToCentimeters(10));
console.log("The result with passed parameter is " + convertToCentimeters(10, 3));
// Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(paramWidth: number, paramHeight?: number): number {
    return paramHeight ? paramWidth * paramHeight : paramWidth * paramWidth;
}
console.log("The area of shape is " + calculateArea(2));
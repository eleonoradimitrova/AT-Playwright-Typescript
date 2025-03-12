// <!-- Create TypeScript file and add following Dom Manipulations
// 1.Change the text of the h1 tag.
var title = document.getElementsByTagName("h1");
if (title[0]) {
    title[0].textContent = "Welcome to TypeScript DOM Manipulation-Homework";
}
// 2.Change the color of the paragraph inside div.content.
var divElement = document.querySelector("div.content");
if (divElement) {
    divElement.style.color = "red";
}
// 3.Change the list items textContent for example to be list of fruits.
var firstFruit = document.querySelector("#list li:nth-of-type(1)");
firstFruit.textContent = "Apple";
var secondFruit = document.querySelector("#list li:nth-of-type(2)");
secondFruit.textContent = "Orange";
var thirdFruit = document.querySelector("#list li:nth-of-type(3)");
thirdFruit.textContent = "Pear";
// 4.Add a button and apply border style "1px solid red" to it. -->
var button = document.createElement("button");
button.style.border = "1px solid red";
button.innerText = "Button";
document.body.appendChild(button);

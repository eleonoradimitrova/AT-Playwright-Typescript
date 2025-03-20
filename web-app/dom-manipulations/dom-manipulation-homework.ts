// <!-- Create TypeScript file and add following Dom Manipulations
// 1.Change the text of the h1 tag.
const title: HTMLCollectionOf<HTMLHeadingElement> =
  document.getElementsByTagName("h1");
if (title[0]) {
  title[0].textContent = "Welcome to TypeScript DOM Manipulation-Homework";
}

// 2.Change the color of the paragraph inside div.content.
const divElement = document.querySelector("div.content") as HTMLHeadingElement;
if (divElement) {
  divElement.style.color = "red";
}

// 3.Change the list items textContent for example to be list of fruits.
const firstFruit = document.querySelector(
  "#list li:nth-of-type(1)"
) as HTMLCollectionOf<HTMLLIElement>[0];
firstFruit.textContent = "Apple";

const secondFruit = document.querySelector(
  "#list li:nth-of-type(2)"
) as HTMLCollectionOf<HTMLLIElement>[1];
secondFruit.textContent = "Orange";

const thirdFruit = document.querySelector(
  "#list li:nth-of-type(3)"
) as HTMLCollectionOf<HTMLLIElement>[2];
thirdFruit.textContent = "Pear";

// 4.Add a button and apply border style "1px solid red" to it. -->
const button = document.createElement("button");
button.style.border = "1px solid red";
button.innerText = "Button";
document.body.appendChild(button);

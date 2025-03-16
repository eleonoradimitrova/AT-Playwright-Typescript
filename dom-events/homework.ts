const sectionContent = document.querySelector(
  "section.content"
) as HTMLHeadingElement;

// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
function addBorderStyle() {
  if (sectionContent) {
    sectionContent.style.border = "2px solid red";
  }
}
const addBorderButton = document.querySelector(
  "#add-border-btn"
) as HTMLButtonElement;
addBorderButton.addEventListener("click", () => addBorderStyle());

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
function changeTextStyle() {
  if (sectionContent) {
    sectionContent.style.color = "blue";
  }
}
const changeTextBtn = document.querySelector(
  "#change-text-btn"
) as HTMLButtonElement;
changeTextBtn.addEventListener("click", () => changeTextStyle());

// Add event listener when button with id "toggle-bg-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
function changeBacgroundColorStyle() {
  if (sectionContent) {
    sectionContent.style.backgroundColor = "gray";
  }
}
const toggleBgBtn = document.querySelector(
  "#toggle-bg-btn"
) as HTMLButtonElement;
toggleBgBtn.addEventListener("click", () => changeBacgroundColorStyle());

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
function boxShadowStyle() {
  if (sectionContent) {
    sectionContent.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
  }
}
const mouseOver = document.querySelector(
  "section.content"
) as HTMLHeadingElement;
mouseOver.addEventListener("mouseover", () => boxShadowStyle());

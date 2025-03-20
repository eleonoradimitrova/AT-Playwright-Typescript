var sectionContent = document.querySelector("section.content");
// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
function addBorderStyle() {
    if (sectionContent) {
        sectionContent.style.border = "2px solid red";
    }
}
var addBorderButton = document.querySelector("#add-border-btn");
addBorderButton.addEventListener("click", function () { return addBorderStyle(); });
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
function changeTextStyle() {
    if (sectionContent) {
        sectionContent.style.color = "blue";
    }
}
var changeTextBtn = document.querySelector("#change-text-btn");
changeTextBtn.addEventListener("click", function () { return changeTextStyle(); });
// Add event listener when button with id "toggle-bg-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
function changeBacgroundColorStyle() {
    if (sectionContent) {
        sectionContent.style.backgroundColor = "gray";
    }
}
var toggleBgBtn = document.querySelector("#toggle-bg-btn");
toggleBgBtn.addEventListener("click", function () { return changeBacgroundColorStyle(); });
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
function boxShadowStyle() {
    if (sectionContent) {
        sectionContent.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
    }
}
var mouseOver = document.querySelector("section.content");
mouseOver.addEventListener("mouseover", function () { return boxShadowStyle(); });

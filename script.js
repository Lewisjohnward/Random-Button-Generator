const btn = document.querySelector(".button");
const div = document.querySelector(".button-container");
btn.addEventListener("click", generateButton);
btn.addEventListener("click", generateButtonStyling);
btn.addEventListener("click", incrementButtonNumber);
let buttonNumber = 0;

function generateButton() {

    let newButton = document.createElement("button");
    newButton.className = `newButton${buttonNumber}`;
    newButton.textContent = "Here I am!"
    newButton.style.height = "100px";
    newButton.style.width = "200px";
    div.appendChild(newButton);
    
}

function generateButtonStyling() {


    let newButton = document.querySelector(`.newButton${buttonNumber}`);

    //generate RGBA for button background color
    let rBg = Math.floor(Math.random() * 255) + 1;
    let gBg = Math.floor(Math.random() * 255) + 1;
    let bBg = Math.floor(Math.random() * 255) + 1;
    let aBg = Math.random();
    
    //generate border styling for button - color width style
    const arrStyle = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial"];
    let choose = Math.floor(Math.random() * 8);
    let borderStyle = arrStyle[choose];

    let rBrder = Math.floor(Math.random() * 10);
    let gBrder = Math.floor(Math.random() * 10);
    let bBrder = Math.floor(Math.random() * 10);
    let aBrder = Math.random();

    let borderWidth = Math.floor(Math.random() * 10);

    newButton.style.background = `rgba(${rBg}, ${gBg}, ${bBg}, ${aBg})`;
    newButton.style.borderStyle = borderStyle;
    newButton.style.BorderColor = `rgba(${rBrder}, ${gBrder}, ${bBrder}, ${aBrder})`;
    newButton.style.BorderWidth = `${borderWidth}px`;


}

function incrementButtonNumber(){
    buttonNumber++;
}
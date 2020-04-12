let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let numberOfSquares = 6;

let colors = [];
let squares = document.querySelectorAll(".square");
let pickedColor;

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons(){
    for(let i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            for(let i=0; i<modeButtons.length; i++){
                modeButtons[i].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}


function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor.toUpperCase();

function changeColors(color){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    const arr = [];
    for(let i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    const red = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    const green = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + String(red) + ", " + String(green) + ", " + String(blue) + ")";
}
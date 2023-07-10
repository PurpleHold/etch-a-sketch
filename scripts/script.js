const gridContainer = document.querySelector('div.grid-container');
const squareDiv = document.createElement('div');
const askPixels = document.querySelector('#pixels');

let baseOpacity;
let manyDivs = "";

for (i=0; i<1024; i++) {
    manyDivs += '<div class="new-div"></div>';
}
gridContainer.innerHTML = manyDivs;

const allSquares = document.querySelectorAll('.new-div');
console.log(allSquares);

function sketch () {
    allSquares.forEach(square => {
        square.addEventListener("mouseover", (square) => {
            square.target.style.opacity = Number(square.target.style.opacity) + 0.1 + "";
        })
    });
}

sketch();


let newPixelsNb;

askPixels.onclick = () => {
    newPixelsNb = Number(prompt("Choose the number of squares per side (default 32, max is 100)"));
    if ((newPixelsNb > 100) || (newPixelsNb == NaN)  || (newPixelsNb < 0)) {
        alert("Invalid number. Please use a number between 1 and 100.");
        return;
    }
    manyDivs = "";
    for (i=0; i<(newPixelsNb*newPixelsNb); i++) {
        manyDivs += '<div class="new-div"></div>';
    }
    gridContainer.innerHTML = manyDivs;
    const allSquares = document.querySelectorAll('.new-div');

    let newWidth = ((Math.round((85/newPixelsNb)*100))/100) + "%";
    const newDivs = document.getElementsByClassName('new-div');
    for(i = 0; i < newDivs.length; i++) {
    newDivs[i].style.width = newWidth;
    }

    allSquares.forEach(square => {
        square.addEventListener("mouseover", (square) => {
            square.target.style.opacity = Number(square.target.style.opacity) + 0.1 + "";
        })
    });
};

/*let newWidth = ((Math.round((85/newPixelsNb)*100))/100) + "%";
let newWidth = Math.round((80/newPixelsNb)*10) + "px";
square.target.style.backgroundColor = "rgba(108, 29, 218," + (newColor += 0.05) + ")";*/

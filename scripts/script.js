const gridContainer = document.querySelector('div.grid-container');
const squareDiv = document.createElement('div');
const askPixels = document.querySelector('#pixels');
console.log(askPixels);

let manyDivs = "";
for (i=0; i<9999; i++) {
    manyDivs += "<div></div>";
}
gridContainer.innerHTML = manyDivs;
/*
for (i=0; i<256; i++) {
    gridContainer.innerHTML += "<div></div>";
}
*/
const allSquares = document.querySelectorAll('.grid-container > div');
console.log(allSquares);

allSquares.forEach(square => {
    square.addEventListener("mouseover", (square) => {
        square.target.style.backgroundColor = "red";
    })
});

let newPixelsNb;
askPixels.onclick = () => {
    newPixelsNb = Number(prompt("Choose the number of squares per side (default 16, max is 100)"))
};

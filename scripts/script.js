const gridContainer = document.querySelector('div.grid-container');
const squareDiv = document.createElement('div');
const askPixels = document.querySelector('#pixels');
console.log(askPixels);

let manyDivs = "";
for (i=0; i<1024; i++) {
    manyDivs += '<div class="new-div"></div>';
}
gridContainer.innerHTML = manyDivs;

const allSquares = document.querySelectorAll('.new-div');
console.log(allSquares);

allSquares.forEach(square => {
    square.addEventListener("mouseover", (square) => {
        square.target.style.backgroundColor = "red";
    })
});

let newPixelsNb;

askPixels.onclick = () => {
    newPixelsNb = Number(prompt("Choose the number of squares per side (default 32, max is 100)"));
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
            square.target.style.backgroundColor = "red";
        })
    });
};

/*let newWidth = ((Math.round((85/newPixelsNb)*100))/100) + "%";
let newWidth = Math.round((80/newPixelsNb)*10) + "px";*/

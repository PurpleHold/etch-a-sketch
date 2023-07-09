const gridContainer = document.querySelector('div.grid-container');
const squareDiv = document.createElement('div');
console.log(squareDiv);

for (i=0; i<256 ; i++) {
    gridContainer.innerHTML += "<div></div>";
}

const allSquares = document.querySelectorAll('.grid-container div');
console.log(allSquares);

/*
allSquares.forEach(square => {
    addEventListener("mouseover", () => {
        
    })
});

*/
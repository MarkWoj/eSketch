const gridArea = document.querySelector('#gridArea');
const button = document.querySelector('button');

//clear the grid
function clearGrid() {
    while (gridArea.firstChild) {
        gridArea.removeChild(gridArea.firstChild);
    }
};

//ask user to select the size of the grid side (max. 100)
function getGridSize() {
};

//draw the grid
function drawGrid() {
  let gridSize = prompt("Select the size of the grid (max. 100)", "Enter grid size");
  document.documentElement.style
      .setProperty('--side', gridSize);
  for(i=1; i<=Math.pow(gridSize,2); i++) {
    let square = document.createElement('div');
    square.classList.add('item');
    gridArea.appendChild(square);
  };
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.classList.add('newItem');
    });
  });
};

// act on button click
button.addEventListener('click', () => {
  clearGrid();
//  getGridSize();
  drawGrid();
});

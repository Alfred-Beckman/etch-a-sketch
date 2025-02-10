const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearbtn");
const grid = [];
const cellSize = 15;
const gridSize = 32;
let mouseIsDown = false;

container.style.width = (cellSize*gridSize).toString() + "px";
container.style.height = (cellSize*gridSize).toString() + "px";

document.body.onmousedown = () => (mouseIsDown = true);
document.body.onmouseup = () => (mouseIsDown = false);

for(let i = 0; i < gridSize*gridSize; i++)
{
    grid[i] = document.createElement("div");
    grid[i].style.backgroundColor = "gray";
    grid[i].style.width = cellSize.toString() + "px";
    grid[i].style.height = cellSize.toString() + "px";
    container.appendChild(grid[i]);
}

clearBtn.addEventListener("click", () => {
    grid.forEach((cell) =>{
        cell.style.backgroundColor = "gray";
    });

});

grid.forEach((cell) =>{

    cell.addEventListener("mouseenter", () => {
        if(mouseIsDown){
            cell.style.backgroundColor = "black";
        }
    });

});
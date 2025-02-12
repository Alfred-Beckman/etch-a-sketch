const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearbtn");
const resBtn = document.querySelector("#resbtn");
const zoomInBtn = document.querySelector("#zoominbtn");
const zoomOutBtn = document.querySelector("#zoomoutbtn");
const rainbow = document.querySelector("#rainbow");
const blackPaint = document.querySelector("#black");

const grid = [];
let rainbowOn = false;
let cellSize = 25;
let gridRes = 16;
let mouseIsDown = false;
let rainbowColor = "";
let paintOpacity = 0;

document.body.onmousedown = () => (mouseIsDown = true);
document.body.onmouseup = () => (mouseIsDown = false);

function generateGrid(gridRes, cellSize)
{
    container.style.width = (cellSize*gridRes).toString() + "px";
    container.style.height = (cellSize*gridRes).toString() + "px";
    for(let i = 0; i < gridRes*gridRes; i++)
    {
        grid[i] = document.createElement("div");
        grid[i].style.backgroundColor = "white";
        grid[i].style.opacity = "1";
        grid[i].style.width = cellSize.toString() + "px";
        grid[i].style.height = cellSize.toString() + "px";
        container.appendChild(grid[i]);

    }
}

function deleteGrid()
{
    for(let i = 0; i < grid.length; i++)
    {
        grid[i].remove();
    }
}

function getRandomColor()
{
    return "rgb(" + Math.random() * (255-0)+0 + "," + Math.random() * (255-0)+0 + "," + Math.random() * (255-0)+0 + ")";
}

clearBtn.addEventListener("click", () => {
    grid.forEach((cell) =>{
        cell.style.backgroundColor = "white";
        cell.style.opacity = "1";
        
    });
    paintOpacity = 0;
});

zoomInBtn.addEventListener("click", () => {
    cellSize *= 1.1;

    container.style.width = (cellSize*gridRes).toString() + "px";
    container.style.height = (cellSize*gridRes).toString() + "px";

    for(let i = 0; i < grid.length; i++)
        {
            grid[i].style.width = (cellSize).toString() + "px";
            grid[i].style.height = (cellSize).toString() + "px";
        }
});

zoomOutBtn.addEventListener("click", () => {
    cellSize *= 0.9;

    container.style.width = (cellSize*gridRes).toString() + "px";
    container.style.height = (cellSize*gridRes).toString() + "px";

    for(let i = 0; i < grid.length; i++)
        {
            grid[i].style.width = (cellSize).toString() + "px";
            grid[i].style.height = (cellSize).toString() + "px";
        }
});

rainbow.addEventListener("click", () => {
    rainbowOn = true;
});

blackPaint.addEventListener("click", () => {
    rainbowOn = false;
});

resBtn.addEventListener("click", () => {
    gridRes = window.prompt("Enter a number from 1-64: ");
    while(gridRes < 1 || gridRes > 64)
    {
        gridRes = window.prompt("Wrong input. Enter a number from 1-64: ");
    }
    cellSize = 400/gridRes;
    deleteGrid();
    generateGrid(gridRes, cellSize);
});

/*let nr = 0;

document.body.onmousedown = () =>{

    nr++;
    container.onmouseover = () => 
    {
        console.log(nr);
    };
}; */


//"paints" color of div cell with mouse

document.body.addEventListener("mousedown", () =>
{
    for(let i = 0; i < grid.length; i++)
    {
        grid[i].onmouseover = () => {
            if(mouseIsDown){
                console.log(grid.length);
                if(grid[i].style.backgroundColor == "white")
                {
                    grid[i].style.opacity = 0;
                }

                if(rainbowOn)
                {
                    grid[i].style.backgroundColor = getRandomColor();
                }
                else{
                    grid[i].style.backgroundColor = "black";
                }

                paintOpacity = parseFloat(grid[i].style.opacity) + 0.1;
                grid[i].style.opacity = paintOpacity.toString();
    
            }
        };

        grid[i].onmousedown = () => {
            if(mouseIsDown){
                console.log(grid.length);
                if(grid[i].style.backgroundColor == "white")
                {
                    grid[i].style.opacity = 0;
                }

                if(rainbowOn)
                {
                    grid[i].style.backgroundColor = getRandomColor();
                }
                else{
                    grid[i].style.backgroundColor = "black";
                }

                paintOpacity = parseFloat(grid[i].style.opacity) + 0.1;
                grid[i].style.opacity = paintOpacity.toString();
    
            }
        };
    }
});

generateGrid(gridRes, cellSize);
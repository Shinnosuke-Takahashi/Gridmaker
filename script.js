let numRows = 0;
let numCols = 0;
let colorSelected; 
const grid = document.getElementById("grid");
/*
things to consider:
is the new row added/removed on/from the left or right, OR does the creation/removal of a new row/col
refresh the entire grid

creation of node objects with color property
*/


//Add a row
function addR() {
    alert("Clicked Add Row")
    let cell = document.createElement("tr");
    cell.innerHTML += "<td>blah</td>";
    for (i in numCols) {
        cell.innerHTML += "<td>blah</td>";
    }
    grid.appendChild(cell);
    numCols++;
    numRows++;
};
//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}

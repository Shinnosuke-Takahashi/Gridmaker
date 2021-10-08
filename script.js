let numRows = 0;
let numCols = 0;
let colorSelected; 
const grid = document.getElementById("grid");
const 

//Add a row
function addR() {
    alert("Clicked Add Row")
    if (numRows === 0 || numCols === 0) {
        grid.innerHTML = "<tr><th>blah</th></tr>";
        numRows = 1;
        numCols = 1;
    }
}
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

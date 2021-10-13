let numRows = 0;
let numCols = 0;
let colorSelected; 

/*
things to consider:
NEED TO ADD COLOR FUNCTIONALITY
*/

//Add a row
function addR() {
    //alert("Clicked Add Row");
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow(-1);
    let newCell = newRow.insertCell();
    if (numRows === 0) {   
        newCell;
        numRows++;
        numCols++;
    }
    else {
        newRow;
        for (let i = 1; i < numCols; i++) {
            newRow.insertCell(i);
        }
        numRows++;
    }
};
//Add a column
function addC() {
    //alert("Clicked Add Col")
    let grid = document.getElementById("grid");
    let tableBody = grid.tBodies[0];
	if (numCols === 0) {
        grid.insertRow(0).insertCell();
        numRows++;
        numCols++;
    }
    else {
        for (let i = 0; i < tableBody.rows.length; i++) 
        {
            tableBody.rows[i].insertCell(-1);
        }
        numCols++; 
    } 
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

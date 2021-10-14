//VARIABLE DECLARATIONS -- DO NOT EDIT
let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");


/*
things to consider:
NEED TO ADD COLOR FUNCTIONALITY
*/

//Add a row
function addR() {
    //alert("Clicked Add Row");
    let newRow = grid.insertRow(-1);
    let newCell = newRow.insertCell(-1);
    if (numRows === 0) {
        numCols = 0;   
        newCell.style.backgroundColor = colorSelected;
        numRows++;
        numCols++;
    }
    else {
        for (let i = 1; i < numCols; i++) {
            newRow.insertCell(i);
        }
        numRows++;
    }
    console.log("numCol:" + numCols +  " numRows: " + numRows);
};
//Add a column
function addC() {
    //alert("Clicked Add Col")
	if (numCols === 0) {
        numRows = 0;
        grid.insertRow(-1).insertCell(-1).style.backgroundColor = colorSelected;
        numRows++;
        numCols++;
    }
    //THE ELSE IS BROKEN
    else {  
        for (let i = 0; i < grid.rows.length; i++) 
        {
            grid.rows[i].insertCell(-1).style.backgroundColor = colorSelected;
        }
        numCols++; 
    } 
    console.log("numCol:" + numCols +  " numRows: " + numRows);
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
    grid.deleteRow(-1);
    if (numRows > 0) {
        numRows--;
    }
    if (numRows === 0) {
        numCols = 0;
    }
    console.log("numCol:" + numCols +  " numRows: " + numRows);
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    for (let i = 0; i < grid.rows.length; i++) {
        if (grid.rows[i].cells.length > 0) {
            grid.rows[i].deleteCell(-1);
        }
    }
    if (numCols > 0) {
        numCols--;
    }
    if (numCols === 0) {
        numRows = 0;
    }
    console.log("numCol:" + numCols +  " numRows: " + numRows);
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

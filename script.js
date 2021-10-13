let numRows = 0;
let numCols = 0;
let colorSelected; 

/*
things to consider:
new stuff is added on right side and taken away on right side
*/


//Add a row
function addR() {
    alert("Clicked Add Row");
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow();
    let newCell = newRow.insertCell();
    if (numRows === 0) {    
        newCell;
        //coloring does not work
        //grid.getElementsByTagName("tbody").getElementsByTagName("tr").getElementsByTagName("td").style.backgroundColor = colorSelected;
        numRows++;
        numCols++;
    }
    else {
        for (i in numCols) {
            newCell;
            //coloring does not work
            //grid.getElementsByTagName("tbody").getElementsByTagName("tr").getElementsByTagName("td").style.backgroundColor = colorSelected;
        }
        numRows++;
    }
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

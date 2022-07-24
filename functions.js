/*
* Functions below added by Joshua Nussbaumer
*/

//Sets the percentage to 100% when the user first enters the webapp
document.getElementById("grade").innerHTML = "100%";

//Table
const table = document.getElementById("assignments");

//updates the grades using the user's input
function updateGrade(maxPoints, userScore, gradeWeight) {

  var intGradeWeight = parseInt(gradeWeight);
  var currentFinal = document.getElementById("grade").innerHTML;
  currentFinal = parseInt(currentFinal);

  //The math I used to calculate the grade
  var one = userScore / maxPoints;
  var two = intGradeWeight * one;
  var three = intGradeWeight - two;
  var four = currentFinal - three;
  var five = four + '';
  document.getElementById("grade").innerHTML = five + "%";
}

//Prompts the user to enter ther assignment information, and then adds it to the table
function getInfo() {
  const assignmentName = prompt('Enter the name of the assignment');
  const maxPoints = prompt('Enter the maximum number of points');
  const userScore = prompt('Enter the number of points you got');
  const gradeWeight = prompt('Enter the weight of the assignment') + '%';

  addRow(assignmentName, maxPoints, userScore, gradeWeight);
}

//Adds a new row to the table using the parameters passed to this function
function addRow(assignmentName, maxPoints, userScore, gradeWeight) {

  var row = document.createElement("tr");

  var row1 = document.createElement("td");
  var row2 = document.createElement("td");
  var row3 = document.createElement("td");
  var row4 = document.createElement("td");

  var cell1 = document.createTextNode(assignmentName);
  var cell2 = document.createTextNode(maxPoints);
  var cell3 = document.createTextNode(userScore);
  var cell4 = document.createTextNode(gradeWeight);

  row1.appendChild(cell1);
  row2.appendChild(cell2);
  row3.appendChild(cell3);
  row4.appendChild(cell4);
  
  row.appendChild(row1);
  row.appendChild(row2);
  row.appendChild(row3);
  row.appendChild(row4);
  
  table.appendChild(row);

  updateGrade(maxPoints, userScore, gradeWeight);
}

//Gets the data from each row starting from the second row.
function saveData() {
  var currentTable = document.getElementById("assignments");
  var numRows = currentTable.rows.length;
  var userData = [];
  if(numRows != 1) {

    for(var i = 1; i < numRows; i++) {
      for(var j = 0; j < 4; j++) {
        userData.push(currentTable.rows[i].cells[j].innerHTML);
      }    
    }

    //converts the array to a string in order to get localStorage to work
    var str = JSON.stringify(userData)
    localStorage.setItem("row", str);
    alert("Grades Saved!");
  }
  else {
    alert("You don't have any grades entered!")
  }
}

//Loads data from localStorage into the table.
function loadData() {
  
  //check if the user has nothing saved
  if(localStorage.length > 0) {

    var saveData = JSON.parse(localStorage.getItem("row"));
    var dataArray = saveData + '';
    dataArray = dataArray.split(",");
    
    var j = 0;

    //Because the table has 4 variables per row, it can be divided by 4 to run once per row.
    for(var i = 0; i < dataArray.length / 4; i++) {
      addRow(dataArray[j], dataArray[j+1], dataArray[j+2], dataArray[j+3]);
      j += 4;
    }

    localStorage.clear();

  }
  else {
    alert("Sorry, you don't have any grades saved!");
  }

}

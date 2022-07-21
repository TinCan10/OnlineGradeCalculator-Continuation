/*
* Functions to add a new assignment and update the final grade by Joshua Nussbaumer
*/
var percent = 100;
var spercent = toString(percent);
function askForTotal() {
  document.getElementById("grade").innerHTML = "100%";
} 

const table = document.getElementById("assignments");

function updateGrade(maxPoints, userScore, gradeWeight) {

  var currentFinal = document.getElementById("grade").innerHTML;
  currentFinal = parseInt(currentFinal);
  var one = userScore / maxPoints;
  var two = gradeWeight * one;
  var three = gradeWeight - two;
  var four = currentFinal - three;
  var five = four + '';
  document.getElementById("grade").innerHTML = five + "%";
}

function addRow() {

  const assignmentName = prompt('Enter the name of the assignment');
  const maxPoints = prompt('Enter the maximum number of points');
  const userScore = prompt('Enter the number of points you got');
  const gradeWeight = prompt('Enter the weight of the assignment');

  var row = document.createElement("tr");

  var row1 = document.createElement("td");
  var row2 = document.createElement("td");
  var row3 = document.createElement("td");
  var row4 = document.createElement("td");

  var cell1 = document.createTextNode(assignmentName);
  var cell2 = document.createTextNode(maxPoints);
  var cell3 = document.createTextNode(userScore);
  var cell4 = document.createTextNode(gradeWeight + "%");

  row1.appendChild(cell1);
  row2.appendChild(cell2);
  row3.appendChild(cell3);
  row4.appendChild(cell4);
  
  row.appendChild(row1);
  row.appendChild(row2);
  row.appendChild(row3);
  row.appendChild(row4);
  
  row.contentEditable="true";
  table.appendChild(row);

  updateGrade(maxPoints, userScore, gradeWeight);
}

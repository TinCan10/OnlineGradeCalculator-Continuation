const table = document.getElementById("assignments");

function addRow() {

  var row = document.createElement("tr");

  var row1 = document.createElement("td");
  var row2 = document.createElement("td");
  var row3 = document.createElement("td");

  var cell1 = document.createTextNode("");
  var cell2 = document.createTextNode("");
  var cell3 = document.createTextNode("");
  
  row1.appendChild(cell1);
  row2.appendChild(cell2);
  row3.appendChild(cell3);
  
  row.appendChild(row1);
  row.appendChild(row2);
  row.appendChild(row3);
  
  row.contentEditable="true";
  table.appendChild(row);
}
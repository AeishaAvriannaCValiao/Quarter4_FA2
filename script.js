function generateTable() {
  const rows = parseInt(document.getElementById('rows').value);
  const cols = parseInt(document.getElementById('cols').value);
  const output = document.getElementById('output');

  // Check if inputs are valid numbers and within range
  if (isNaN(rows) || isNaN(cols) || rows < 2 || rows > 10 || cols < 2 || cols > 10) {
    alert("Please enter numbers between 2 and 10");
    output.innerHTML = ""; // Clear previous output
    return;
  }

  let result = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      result += (i * j) + " ";
    }
    result += "<br>";
  }

  output.innerHTML = result;
}

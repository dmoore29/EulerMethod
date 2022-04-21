// Formula variables
var h = 0;
var x0 = 0;
var x1 = 0;
var y0 = 0;

// Calculates Euler Method
function Calculate(yPrime, stepSize, startX, startY, endX){
    try{
        // Set variables
        h = Number(stepSize);
        x0 = Number(startX);
        x1 = Number(endX);
        y0 = Number(startY);
        
        // Initialize variables
        let n = (x1-x0)/h;
        const x = [];
        const y = [];
        x[0] = x0;
        y[0] = y0;

        // Calculations
        for(let i = 1; i <= n; i++){
            x[i] = new Number(Number(x[i-1]) + Number(h)).toFixed(2);
            let result = Formula.calc(String(yPrime),{x: Number(x[i-1]), y: Number(y[i-1])});
            y[i] = Number(y[i-1]) + Number(h) * Number(result);
        }

        // Clear existing elements
        let tableContent = document.getElementById("OutputTable").getElementsByTagName('td');
        Array.from(tableContent).forEach(function (element) {
            element.remove();
        });

        // Display results
        let tableElement = document.getElementById("OutputTable");

        for(let i = 0; i <= n; i++){
            console.log(Number(x[i]).toFixed(2) + ", " + Number(y[i]).toFixed(2));
            let row = tableElement.insertRow(i+1);
            row.style.class="row";
            let xCell = row.insertCell(0);
            let yCell = row.insertCell(1);

            xCell.innerHTML = Number(x[i]).toFixed(2);
            xCell.style.class = "cell";
            yCell.innerHTML = Number(y[i]).toFixed(2);
            yCell.style.class = "cell";
        }
        
        document.getElementById("OutputTable").style.display = "";
    } catch {
        alert("Please check input and try again.");
    }
}

// Execute a function when the user releases a key on the keyboard
let input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("calculateButton").click();
    }
});

// Button click handler
document.getElementById('calculateButton').onclick = function(){
    Calculate(
        document.getElementById('yPrime').value,
        document.getElementById('stepSize').value,
        document.getElementById('startX').value,
        document.getElementById('startY').value,
        document.getElementById('endX').value
    )
};
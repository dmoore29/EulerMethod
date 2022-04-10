
var h = 0;
var x0 = 0;
var x1 = 0;
var y0 = 0;

function Calculate(yPrime, stepSize, startX, startY, endX){
    //alert("Calculating..." + yPrime + stepSize + startX + startY + endX);
    h = Number(stepSize);
    x0 = Number(startX);
    x1 = Number(endX);
    y0 = Number(startY);
    
    let n = (x1-x0)/h;
    const x = [];
    const y = [];

    x[0] = x0;
    y[0] = y0;

    for(let i = 1; i <= n; i++){
        x[i] = new Number(Number(x[i-1]) + Number(h)).toFixed(2);

        //TODO: Update to use dynamic formula. Currently x*y
        //y[i] = Number(y[i-1]) + Number(h) * (Number(x[i-1]) * Math.sqrt(Number(y[i-1])));
        let result = Formula.calc(String(yPrime),{x: Number(x[i-1]), y: Number(y[i-1])}); // result = 8
        y[i] = Number(y[i-1]) + Number(h) * Number(result);
    }

    for(let i = 0; i <= n; i++){
        console.log(Number(x[i]).toFixed(2) + ", " + Number(y[i]).toFixed(2));
    }
}

document.getElementById('calculateButton').onclick = function(){
    Calculate(
            document.getElementById('yPrime').value,
            document.getElementById('stepSize').value,
            document.getElementById('startX').value,
            document.getElementById('startY').value,
            document.getElementById('endX').value
            )
};
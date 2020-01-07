 /*
            Below is legacy code from original project desciption from the
            odin project
        */
       function add(a, b){
        return Math.round(a + b);
    }

    function subtract(a, b){
        return Math.round(a-b);
    }

    function multiply(a, b){
        return Math.round(a * b);
    }

    function divide(a, b){
        return Math.round(a / b);
    }

    function operand(a, b, operator){
        if(operator == "add"){
            return add(a, b);
        }

        if(operator === "subtract"){
            return subtract(a, b);
        }

        if(operator === "multiply"){
            return multiply(a, b);
        }

        if(operand === "divide"){
            return divide(a, b);
        }
    }

    /*
        End of legacy code
    */

    let currentCalculatorValue = null;

    function addValueToDisplay(){
        if (currentCalculatorValue === null){
            let display = document.getElementById("calculatorDisplay");
            display.innerHTML = this.value;
            currentCalculatorValue = this.value;
        }
        else{
            let display = document.getElementById("calculatorDisplay");
            display.innerHTML = currentCalculatorValue + this.value;
            currentCalculatorValue = display.innerHTML;
        }
    }

    function evaluation() {
        let display = document.getElementById("calculatorDisplay");
        display.innerHTML = parse(display.innerHTML);
        currentCalculatorValue = display.innerHTML;

    }

    function clear(){
        currentCalculatorValue = null;
        let display = document.getElementById("calculatorDisplay");
        display.innerHTML = "0";
    }

    function inverse(){
        evaluation();
        let display = document.getElementById("calculatorDisplay");
        display.innerHTML = parse(display.innerHTML.concat("*-1"));
        currentCalculatorValue = display.innerHTML;
    }

    function percent(){
        evaluation();
        let display = document.getElementById("calculatorDisplay");
        display.innerHTML = parse(display.innerHTML.concat("/100"));
        currentCalculatorValue = display.innerHTML;
    }

    // change code from eval to parse

    function parse(str) {
        return Function(`'use strict'; return (${str})`)()
    }

    // set event listener for number digits
    let numberButtons = document.getElementsByClassName("number");

    for (let x = 0; x < numberButtons.length; x++){
        numberButtons[x].addEventListener("click", addValueToDisplay);
    }

    let mathOperationsButtons = document.getElementsByClassName("operator");
    
    for (let x = 0; x < mathOperationsButtons.length; x++){
        mathOperationsButtons[x].addEventListener("click",addValueToDisplay);
    }

    let equalsButton = document.getElementById("equal");
    equalsButton.addEventListener("click", evaluation);

    let clearButton = document.getElementById("ac");
    clearButton.addEventListener("click", clear);

    let inverseButton = document.getElementById("+/-");
    inverseButton.addEventListener("click", inverse);

    let percentButton = document.getElementById("percent");
    percentButton.addEventListener("click", percent);


      


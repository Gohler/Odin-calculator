const add = (firstNumber,secondNumber) => {
    return parseFloat(firstNumber, 10) + parseFloat(secondNumber, 10);
}
const substract = (firstNumber,secondNumber) => {
    return parseFloat(firstNumber, 10) - parseFloat(secondNumber, 10);
}
const multiply = (firstNumber,secondNumber) => {
    return parseFloat(firstNumber, 10) * parseFloat(secondNumber, 10);
}
const divide = (firstNumber,secondNumber) => {
    return parseFloat(firstNumber, 10) / parseFloat(secondNumber, 10);
}

const operate = (firstNumber,secondNumber,operand) => {

    console.log(firstNumber,secondNumber)
    switch (operand){
        case "+":
            return add(firstNumber,secondNumber);   
        case "-":
            return substract(firstNumber,secondNumber);     
        case "*":
            return multiply(firstNumber,secondNumber);     
        case "/":
            return divide(firstNumber,secondNumber);
    }
}

const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
const resultButton = document.querySelector("#result");
const clearButton = document.querySelector("#clear");
const operands = document.querySelectorAll(".operand");
const deleteButton = document.querySelector("#delete");
const divideButton = document.querySelector("#divide");
const substractButton = document.querySelector("#substract");
const addButton = document.querySelector("#add");
const multiplyButton = document.querySelector("#multiply");
const numbers  = document.querySelectorAll(".number");

screen.textContent = "0";

let firstNumber = null
let secondNumber = null
let operand = null;
let lastButton = null;

resultButton.addEventListener("click", () => {
    if (lastButton === "result" || screen.textContent === "0") {
        return false;
    }
    lastButton = "result"
    secondNumber = screen.textContent
    screen.textContent = operate(firstNumber,secondNumber,operand);
    firstNumber = screen.textContent;
    console.log(firstNumber,secondNumber,operand,lastButton);

})

deleteButton.addEventListener("click", () => {
    screen.textContent = screen.textContent.substring(0,`${screen.textContent}`.length -1);
})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (screen.textContent === "0") {
            lastButton = "number";
            screen.textContent = number.textContent;
        } else {
            if (lastButton === "operand") {
                screen.textContent = ""
                screen.append(number.textContent);
                lastButton = "number";
            } else {
                screen.append(number.textContent);
                lastButton = "number";
            }
        }
        console.log(firstNumber,secondNumber,operand,lastButton);
    });
});

operands.forEach(button => {
    button.addEventListener("click", () => {
        if (lastButton === "operand" || screen.textContent === "0"){
            return false;
        }
        lastButton = "operand";
        operand = button.textContent;
        if (!firstNumber){
            firstNumber = screen.textContent;
        } else {
            secondNumber = screen.textContent;
        }
        console.log(firstNumber,secondNumber,operand,lastButton);
    })
})
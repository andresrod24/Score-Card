
let num1 = 0;
let num2 = 0;

newFunction();

function newFunction() {
    document.getElementById("num1-el").textContent = num1;
    document.getElementById("num2-el").textContent = num2;
}

function addUnoToNum1() {
    num1 += 1;
    document.getElementById("num1-el").textContent = num1;
}

function addDosToNum1() {
    num1 += 2;
    document.getElementById("num1-el").textContent = num1;
}

function addTresToNum1() {
    num1 += 3;
    document.getElementById("num1-el").textContent = num1;
}

function addUnoToNum2() {
    num2 += 1;
    document.getElementById("num2-el").textContent = num2;
}

function addDosToNum2() {
    num2 += 2;
    document.getElementById("num2-el").textContent = num2;
}

function addTresToNum2() {
    num2 += 3;
    document.getElementById("num2-el").textContent = num2;
}
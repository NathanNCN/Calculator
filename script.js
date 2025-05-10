// Number buttons
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");




// Function buttons
const del = document.getElementById("del");
const clear = document.getElementById("clear");
const ac = document.getElementById("ac")

// Operation buttons
const division = document.getElementById("÷");
const addtion = document.getElementById("+");
const subtraction = document.getElementById("-");
const multiplication = document.getElementById("x");
const equals = document.getElementById("=");


const display = document.getElementById("display");

let lastAnswer = "";
let currentNum = "";
let opperator = "";
let nums = [];

function restDecimal(){
    dot.disabled = false;
    dot.style.backgroundColor = "#505050";
}

function convertNum(StringNum){
    restDecimal();
    if (StringNum == "" || StringNum[0] == "." || StringNum.endsWith(".")){
        restError()
        return false;
    } else if (StringNum.length > 1 && StringNum[0] == "0"){
        restError()

        return false;
    } else {
        nums.push(parseFloat(StringNum));
        currentNum = "";
        display.innerHTML = "";
        return true;
    }
}

function restError(){
        display.innerHTML = "ERROR, please put a valid input"
        nums = [];
        currentNum = "";
        opperator = "";
}

function findAnswer(){
    let answer = 0;
    if (nums.length == 2){
        if (opperator == "÷") {
            answer = nums[0] / nums[1];

        } else if (opperator == "÷"){
            answer = nums[0] / nums[1];
        }else if (opperator == "x"){
            answer = nums[0] * nums[1];
        }else if (opperator == "+"){
            answer = nums[0] + nums[1];
        }else if (opperator == "-"){
            answer = nums[0] - nums[1];
        }
    }
    if (!isFinite(answer) || isNaN(answer)){
        restError();
    } else{
        currentNum = "";
        display.innerHTML = answer;
        nums = [answer];
        lastAnswer = answer;
    }


}

one.addEventListener("click", () => {
    currentNum += "1"
    display.innerHTML = currentNum;
})
two.addEventListener("click", () => {
    currentNum += "2"
    display.innerHTML = currentNum;
})
three.addEventListener("click", () => {
    currentNum += "3"
    display.innerHTML = currentNum;
})
four.addEventListener("click", () => {
    currentNum += "4"
    display.innerHTML = currentNum;
})
five.addEventListener("click", () => {
    currentNum += "5"
    display.innerHTML = currentNum;
})
six.addEventListener("click", () => {
    currentNum += "6"
    display.innerHTML = currentNum;
})
seven.addEventListener("click", () => {
    currentNum += "7"
    display.innerHTML = currentNum;
})
eight.addEventListener("click", () => {
    currentNum += "8"
    display.innerHTML = currentNum;
})
nine.addEventListener("click", () => {
    currentNum += "9"
    display.innerHTML = currentNum;
})
zero.addEventListener("click", () => {
    currentNum += "0"
    display.innerHTML = currentNum;

})

dot.addEventListener("click", () => {
    currentNum += "."
    display.innerHTML = currentNum;
    dot.disabled = true;
    dot.style.backgroundColor = "black";
})

del.addEventListener("click", () => {
    if (currentNum.length != 0){
        const lastChar = currentNum[currentNum.length -1];
        if (lastChar == "."){
            restDecimal();
        }
        currentNum = currentNum.slice(0,-1);
        display.innerHTML = currentNum;
        console.log("del")

    }  
})

division.addEventListener("click", ()=>{
    const valid = convertNum(currentNum);
    if (nums.length == 1){
        opperator = "÷";
    } else if (nums.length == 2){
        findAnswer();
        opperator = "÷";
    }

})


multiplication.addEventListener("click", ()=>{
    const valid = convertNum(currentNum);
    if (nums.length == 1){
        opperator = "x";
    } else if (nums.length == 2){
        findAnswer();
        opperator = "x";
    }

})

addtion.addEventListener("click", ()=>{
    const valid = convertNum(currentNum);
    if (nums.length == 1){
        opperator = "+";
    }else if (nums.length == 2){
        findAnswer();
        opperator = "+";
    }
})


subtraction.addEventListener("click", ()=>{
    const valid = convertNum(currentNum);
    if (nums.length == 1){
        opperator = "-";
    }else if (nums.length == 2){
        findAnswer();
        opperator = "-";
    }
})

equals.addEventListener("click", ()=>{
    const valid = convertNum(currentNum);
    if (nums.length == 1){
        lastAnswer = nums[0];
        currentNum = "";
        display.innerHTML = lastAnswer;
        nums=[];

    } else{
        findAnswer();
        lastAnswer = nums[0];
        currentNum = "";
        display.innerHTML = lastAnswer;
        nums=[];
        
    }
})

clear.addEventListener("click", ()=> {
    currentNum = "";
    nums = [];
    opperator = "";
    display.innerHTML = "";
})

ac.addEventListener("click", () =>{
    currentNum = String(lastAnswer);
    nums = [];
    opperator = "";
    display.innerHTML = currentNum;
})
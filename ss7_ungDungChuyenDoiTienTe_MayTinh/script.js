function Addition(){
        let input1 = parseInt(document.getElementById("input1").value)
        let input2 = parseInt(document.getElementById("input2").value)
        let result =input1+input2;
        document.getElementById("result").innerText=`Result: ${result}`;
}

function Subtracttion(){
    let input1 = parseInt(document.getElementById("input1").value)
    let input2 = parseInt(document.getElementById("input2").value)
    let result =input1-input2;
    document.getElementById("result").innerText=`Result: ${result}`;
}

function Multiplication(){
    let input1 = parseInt(document.getElementById("input1").value)
    let input2 = parseInt(document.getElementById("input2").value)
    let result =input1*input2;
    document.getElementById("result").innerText=`Result: ${result}`;
}

function Division(){
    let input1 = parseFloat(document.getElementById("input1").value)
    let input2 = parseFloat(document.getElementById("input2").value)
    if(input2===0){
        document.getElementById("result").innerText=`Cannot divide by zero`;
    }
    let result =input1/input2;
    document.getElementById("result").innerText=`Result: ${result}`;
}
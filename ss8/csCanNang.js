function calculator(){
    let canNang=document.getElementById("canNang").value;
    let chieuCao=document.getElementById("chieuCao").value;
    let BMI = canNang/(Math.pow(chieuCao,2));
    if(BMI<18.5){
        document.getElementById("result").innerText=`Result: ${BMI.toFixed(2)} Underweight`;
    }
    else if(BMI>=18.5&&BMI<25){
        document.getElementById("result").innerText=`Result:  ${BMI.toFixed(2)} Normal`;
    }
    else if(BMI>=25&&BMI<30){
        document.getElementById("result").innerText=`Result:  ${BMI.toFixed(2)} Overweight`;
    }
    else{
        document.getElementById("result").innerText=`Result:  ${BMI.toFixed(2)}  Obese`
    }
}
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num1 % num2 == 0)
        return num1 / num2;
    else
        return Number((num1/num2).toFixed(5));
}
function operator(symbol, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    switch (symbol){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            if(num2 == 0)
                return "you cant divide by 0";
            else
                return divide(num1, num2);
            break;
    }
}
function clear(){
    displayValue = '';
    var1 =  var2 = ope = '';
    screen.innerHTML = '';
}
let displayValue = '';
let var1, var2, ope;
const screen = document.querySelector(".cal-screen");
const numBtns = document.querySelectorAll(".btn.num");
const opeBtns = document.querySelectorAll(".btn.ope");
const equalBtn = document.querySelector(".btn.equal");
const clearBtn = document.querySelector(".btn.clear");
numBtns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if(displayValue =='*' || displayValue =='-' || displayValue =='/' || displayValue =='+' ){
            displayValue ='';
        }
        displayValue += btn.innerHTML;
        screen.innerHTML = displayValue;  
    });
})
opeBtns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if(var1){
            var2 = displayValue;
            displayValue = Number(operator( ope, var1, var2));
            var1 = displayValue;
            ope = btn.innerHTML;
            screen.innerHTML = displayValue;  
            displayValue ='';
        }
        else{
            var1 = displayValue;
            displayValue = btn.innerHTML;
            ope = btn.innerHTML;
            screen.innerHTML = displayValue;  
        }

        
    });
})
equalBtn.addEventListener('click', (e) =>{
        if(!var1){
            screen.innerHTML = 'ERROR';
        }
        else{
            var2 = displayValue;
            displayValue = operator(ope, var1, var2)
            console.log(displayValue)
            screen.innerHTML = displayValue;
        }

});
clearBtn.addEventListener('click', clear);

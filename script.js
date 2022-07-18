let num1 = '';
let num2 = '';
let operator = '';
let total = '';

$(document).ready(function(){
    $('button').on('click',function(e){
        let btn = e.target.innerHTML;   // gets button entered by user
        if(btn>='0' && btn<='9'|| btn=='.'){
            handleNumber(btn);          //calls func for numbers
        }
        else if(btn=='AC'){

        }
        else{
            handleOperator(btn);        //calls func for operators
        }
    });

});

function handleNumber(num){
    if(num1==""){
        num1= num;
    }
    else{
        num2= num;
    }
}

function handleOperator(oper){
if(operator===""){
    operator= oper;
}
else{
    handleTotal();
    operator= oper;
}
}

function handleTotal(){
    switch(operator){
        case '+': 
        total += +num1 + +num2;
        displayButton(total);
        break;

        case '-': 
        total += +num1 - +num2;
        displayButton(total);
        break;

        case '/': 
        total += +num1 / +num2;
        displayButton(total);
        break;

        case 'x': 
        total += +num1 * +num2;
        displayButton(total);
        break;
    }

    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);
}

function updateVariables(){
    num1 = total;
    num2 = "";
}


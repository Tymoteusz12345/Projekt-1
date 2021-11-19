const htmlnums = document.querySelectorAll('.numbers div')
const allnums = [...htmlnums];
const input = document.querySelector('.input')
const ac = document.querySelector('.ac')
let storageNumber = "";
let storageNumber2 = "";
let result;
let operand = null;
let flag = false;

document.getElementById('=').addEventListener('click',()=>{
    if(flag){
        storageNumber2 = parseInt(input.textContent);
        storageNumber = parseInt(storageNumber)
    
        result = operation(storageNumber,storageNumber2,operand)
        operand = null;
        input.textContent = result;
        storageNumber = result;
        storageNumber2 = "";
        flag = !flag
    }
    
})



//zerowanie 
ac.addEventListener('click',()=>{
    input.textContent = "";
    storageNumber = "";
    storageNumber2 = "";
    result = null;
    operand = null;
})

allnums.forEach(x => {
    x.addEventListener('click',addtoinput)
})


// dodawanie do wyświetlacza
function addtoinput(e){
    let x = e.target.textContent;
     // jeżeli klikam cyfry
     if ( x !== "+" && x !=="-" && x !=="*" && x !=="/") {
        input.textContent += x;
        console.log("klikam cyfre");
    } 
    if(operand == null){
       
        // jeżeli jeszcze nie kliknąłem żadnego oparandu i klikne operand
       if(x == "+" || x == "-" || x == "*" || x == "/") {
           if(!storageNumber){
            storageNumber = input.textContent;
           }
            input.textContent = "";
            operand = x;
            console.log(operand, storageNumber, "działanie");
            flag = !flag
        }
    }
        
    
}

function operation(a,b,operand){
    let operation;
    if(operand == "+"){
        operation = a + b;
    }
    else if(operand == "-") {
        operation = a - b
    }
    else if(operand == "*") {
        operation = a * b
    }
    else if(operand == "/") {
        operation = a / b
    }
    return operation
}


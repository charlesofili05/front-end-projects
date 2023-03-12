let display = document.querySelector("#display");
let btnNum = document.querySelectorAll(".btn-num");
let allClear = document.querySelector("#all-clear");
let deletebtn = document.querySelector("#delete");
let equalTo = document.querySelector("#equalTo");
let operators = document.querySelectorAll(".operators");
let dot = document.querySelector("#dot")
let screen = "";
let isDot= false;

//update the screen
const updateScreen = ()=>{
    display.value = screen;
};
//calcuation
const calc = ()=>{
    let arr = screen.split('');
    for (const item of arr) {
        for (const sign of operators) {
           if(item == sign.value){
            let arr2 = screen.split(sign.value);
            let result;
            switch (sign.value) {
                case "+":
                        result= parseFloat(arr2[0]) + parseFloat(arr2[1]);
                    break;
                case "-":
                        result= parseFloat(arr2[0]) - parseFloat(arr2[1]);
                    break;
                case "/":
                        result= parseFloat(arr2[0]) / parseFloat(arr2[1]);
                    break;
                case "*":
                        result= parseFloat(arr2[0]) * parseFloat(arr2[1]);
                    break;
            }
            screen = result;
            updateScreen();
           };
        };
    };
};
//To make the number buttons work
for (const btn of btnNum) {
    btn.addEventListener("click", ()=>{
        screen += btn.value;
        updateScreen();
    })
};
//To make all clear work
allClear.addEventListener("click", ()=>{
    screen = "";
    updateScreen();
    isDot = false

});
//To make delete work
deletebtn.addEventListener("click", ()=>{
    let arr = screen.split("");
   let digit =  arr.pop();
    screen = arr.join("");
    updateScreen();
    if(digit == "."){
        isDot = false
    }

})
//operators
for (const sign of operators) {
    sign.addEventListener("click", ()=>{
        let arr = screen.split("")
        if((arr.includes('-')||arr.includes('+')||arr.includes('/')||arr.includes('*')) 
        &&
        (arr[arr.length-1] !="-" && arr[arr.length-1] != "+" && arr[arr.length-1] != "/" && arr[arr.length-1] != "*")){
            calc()
            screen+= sign.value
            updateScreen();
        }else if(screen == "" & sign.value != "-"){
            screen+="";
            updateScreen();
        }else if (arr[arr.length-1] == sign.value) {
            screen+="";
            updateScreen();
        }else{
        screen+= sign.value
        updateScreen();
        isDot = false;
        }
        
    })
}
//equal to
equalTo.addEventListener("click", calc)

//dot

dot.addEventListener("click", ()=>{
    let arr = screen.split("");


    if(screen == ""){
        screen += "0."
        isDot = true;
        updateScreen()

    }
    for (const operator of operators) {
        if (arr[arr.length-1] == operator.value) {
        screen += "0."
        updateScreen();
        isDot = true;
        return;
        } 
    }
    

    if(isDot==false &&  arr[arr.length-1] != "." ){
        isDot = true;
        screen += ".";
        updateScreen();
        
    }

})


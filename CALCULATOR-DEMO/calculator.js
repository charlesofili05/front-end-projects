let btn = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");
const operator = document.querySelectorAll(".operators")

let displayValue = "";


//THIS MAKES THE BUTTONS WORK
for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener("click", ()=>{
        // ALL-CLEAR BUTTON
        if(btn[i].value == "all-clear"){
            displayValue= ""
        }
        //DELETE BUTTTON
        else if (btn[i].value  == "delete") {
            let arr = displayValue.split("");
            arr.pop();
            displayValue = arr.join("");
        }
        //OPERATORS BUTON
        else if(btn[i].classList.contains("operators")){
            let arr = displayValue.split("")
            if(displayValue == ""){
                if(btn[i].value=="-"){
                    displayValue += btn[i].value; 
                }else if(btn[i].value=="."){
                    displayValue += "0."; 
                }else{
                    return
                }
                
            }
            else if (arr[arr.length-1] == btn[i].value) {
                return;
            }
            else{
                displayValue += btn[i].value;
            }
        }
        //NUMBER BUTTON
        else{
            displayValue += btn[i].value;
        }
        
        display.value = displayValue;
        
    })}

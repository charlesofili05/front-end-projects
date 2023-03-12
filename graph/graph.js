let c = document.getElementById("myCanvas");
/**@type {CanvasRenderingContext2D} */
let ctx = c.getContext("2d");
ctx.translate(250, 250)

const drawGraph = () => {
    ctx.clearRect(-250, -250, 500, 500)
    for (let x = -250; x < 250; x += 10) {
    for (let y = -250; y < 250; y += 10) {
        if(x%250==0 && y%250==0){
            ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.moveTo(x, -250); 
        ctx.lineTo(x, 250); 
        ctx.stroke()
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.moveTo(-250, y); 
        ctx.lineTo(250, y); 
        ctx.stroke();
        }else if(x%50==0 && y%50==0){
            ctx.beginPath();
        ctx.lineWidth = 0.1;
        ctx.moveTo(x, -250); 
        ctx.lineTo(x, 250); 
        ctx.stroke()
        ctx.beginPath();
        ctx.lineWidth = 0.1;
        ctx.moveTo(-250, y); 
        ctx.lineTo(250, y); 
        ctx.stroke()
        }else{
            ctx.beginPath();
        ctx.lineWidth = 0.01;
        ctx.moveTo(x, -250); 
        ctx.lineTo(x, 250); 
        ctx.stroke()
        ctx.beginPath();
        ctx.lineWidth = 0.01;
        ctx.moveTo(-250, y); 
        ctx.lineTo(250, y); 
        ctx.stroke()
        }   
    } 
};
}

drawGraph()

let inputs = document.querySelectorAll("input");
let plotGraphBtn = document.querySelector('button');
let yCof = document.querySelector("#y-coefficient");
let gradient = document.querySelector("#gradient");
let intercept = document.querySelector("#intercept");
let scaleX = document.querySelector("#scaleX")
let scaleY = document.querySelector("#scaleY")
yCof.value = 1;


const plotGraph = () => {
    drawGraph()
    let a = parseFloat(yCof.value);
    let m = parseFloat(gradient.value);
    let b = parseFloat(intercept.value);
    
    let sX = 50/scaleX.value
    let sY = 50/scaleY.value;
    

    let yCoordinates = new Array;

    for (let x = -5; x <= 5; x++) {
        let y = ((m*x)+b)/a;
        yCoordinates.push(y)     
    }
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(-5*sX, -yCoordinates[0]*sY)
    ctx.lineTo(5*sX, -yCoordinates[yCoordinates.length-1]*sY)
    ctx.stroke()
    let s = scaleX.value;
    ctx.font = "20px sans-serif"
    for (let i = -5; i <= 5; i++) {
    ctx.fillText(i*s,i*50, 0)
    }
    let s2 = scaleY.value;
 
    for (let i = -5; i <= 5; i++) {
     ctx.fillText(-i*s2, 0, i*50)
     }
}


// for (let i = -5; i <= 5; i++) {
//     ctx.fillText(i, 0, i*50)
// }

plotGraphBtn.addEventListener("click", ()=>{

    for (const input of inputs) {

        if(input.value == ""){ 
                return;
            }
        } 
     plotGraph()
})

document.addEventListener("keydown", (e)=>{

    if(e.key == "Enter"){
        
    for (const input of inputs) {
        if(input.value == ""){ 
                return;
            }
        } 
     plotGraph()
    }
})























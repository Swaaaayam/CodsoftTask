var display = document.getElementById("display");
function ToDisplay(input){

     display.value += input;
}
function clearDisplay(){
     var display = document.getElementById("display");
     var currentValue= display.value;
     display.value = currentValue.slice(0, -1);
}
document.addEventListener("keydown", function(event) {  
     if (event.key === "Backspace") {
         var currentValue = display.value;
         display.value = currentValue.slice(0,-1)
     }
 });
function calculate(){

     display.value= eval(display.value);
} 
var input = document.querySelector('input');

const number = (num)=>{
    input.value = input.value+num;
}
const calculate = ()=>{
    input.value = eval(input.value);
}
const Clear  = ()=>{
    input.value = '';
}
const absolute = ()=>{
    input.value =  input.value * -1;
}
const Pow = ()=>{
    input.value =  Math.pow(parseFloat(input.value),2);
}
const Percent = ()=>{
    input.value = input.value * 100;
}
const Sqrt = ()=>{
    input.value =Math.sqrt(parseFloat(input.value));

}    
/*var input = document.querySelector('input');

function number(num1){
    input.value += num1; 
}


function calculate(){
    var result = eval(input.value);
    input.value = result;
}


function Clear(){
    input.value = '';
}


function absolute(){
    var num = input.value * -1;
   input.value = num;
}

function Pow() {
    // var result = input.value * input.value;
    var result = Math.pow(parseFloat(input.value),2);

    input.value = result;
}

function Sqrt(){
    var result = Math.sqrt(parseFloat(input.value));

    input.value = result;
}

function Percent(){
    input.value = input.value/100;
}*/
/*
- for loop
- while loop
- do while loop
- for fo loo (array)
- for of loop ( array)
- function forEach (array)
-function map (array)
-function Filter (array)
*/
var txt =''
var sum = 0;
for(var i=1;i<=10;i++){
    sum+=1;
    if(i==10){
        txt+=i+' = ';
    }
    else{
        txt+=i+' + ';
    }
}
console.log(txt+sum);

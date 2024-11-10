conts prompt = require(' prompt-sync')();
var arr = [];
do{
    console.log("...........[Array...........");
    console.log("1.INPUT");
    console.log("2.OUTPUT");
    console.log("3.SEARCH");
    console.log("4.UPDATE");
    console.log("5.REMOVE");
    console.log("6.SORT");
    console.log("EXIT");

    var op = Number (prompt("Enter option:"));
    switch(op){
        case 1:{
            var n = Number (prompt("How many number to add in array :"))
            for (i=0;i<=n.i++){
                var value = Number (prompt(" Enter value of array:"));
                arr.push(value);        }
            }
            break;
        }
        case 2:{
            console.log("Lenght of array = " +arr.length);
            for(i=0;i<arr.length;i++){
                console.log(arr[1]);
            }
            break;
        }
    }
}while(op!=7);

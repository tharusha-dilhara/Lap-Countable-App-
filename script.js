
let count=0;

let countEL=document.getElementById("number");
let Lap=document.getElementById("lap");




function increment(){


    count+=1;
    countEL.innerText=count;
   

}



function save(){
    Lap.innerText=count;

}



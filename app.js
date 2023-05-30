let test;


const icon=document.querySelectorAll(".icon");
const score=document.querySelectorAll(".score");
const category=document.querySelectorAll(".category");
const arithmeticMean=document.getElementById("arithmetic-mean");


//const icon=document.getElementsByClassName("icon");


window.addEventListener("DOMContentLoaded",async function(){

    //obtain data by fetch() >>succed
    let t1=await fetch("./data.json");
    test=await t1.json();
    //obtain data by AJAX >>succed 
    /*
    let xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        let t1=xhttp.responseText;
        test=JSON.parse(t1);
    }
    xhttp.open("GET","./data.json");
    xhttp.send();   */
    
    /*for(let i=0;i>icon.length;i++){
        icon[i].src=test[i].icon;
    }  */
    let i=0;
    icon.forEach((e)=>{
        e.src= test[i++].icon;
    })
    i=0;
    category.forEach((e)=>{
        e.innerHTML= test[i++].category;
    })
    i=0
    score.forEach(e=>{
        e.innerHTML=test[i++].score;
    })
    let total=0
    for(let i=0;i<test.length ;i++){
        total+=test[i].score;
    }
    arithmeticMean.innerHTML=Math.floor(total/test.length);



})
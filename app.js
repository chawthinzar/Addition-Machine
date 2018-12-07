//ALL OF THE HTML ELEMENTS

//THE AREA WHERE THE ANSWER WILL BE DISPLAYED


const result = document.getElementById('results');
const ip1 = document.getElementById('ip1');

const ip2 = document.getElementById('ip2');
//THE BUTTON THAT WILL CALCULATE THE VALUE OF THE TWO INPUTS AND DISPLAY THE RESULT

const calc = document.getElementById('calc');
//
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');



//ELEMENT LISTENTER FOR  THE CALC BUTTON
calc.addEventListener('click',function(){
    //CREATD TWO NEW VARIABLES THAT USE PARSEFLOAT TO CONVERT A STRING TO A NUMBER
    const firstNum =parseFloat(ip1.value);
    const secondNum  =parseFloat(ip2.value);
    //SETS THE INNER HEML TO THE SUM OF THE TWO INPUTS 
    result.innerHTML=firstNum+secondNum;
})
clr.addEventListenter('click',function(){
    ip1.value='';
    ip2.value='';
    result.innerHTML='';
});



//A FUNCTION THAT GENRATES A RANDOM NUMBER BETWEEN 0 AND 100
function randomNumberGenerator(){
    return Math.floor(Math.random()*100);

}
rand.addEventListener('click',function(){
    ip1.value=randomNumberGenerator();
    ip2.value=randomNumberGenerator();

})

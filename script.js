
//bellow i have Selected all elements i will be working with
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
//this is where the hex color will show
const hex = document.querySelector('.hex');


//this pretty much says when the buttton is clicked get the color

hexBtn.addEventListener("click",getHex);


function getHex (){

let hexCol = '#';


//generates the 6 numbers
for(let i = 0; i<6;i++){

let random = Math.floor(Math.random()*hexNumbers.length);
//console.log(random);
// adds value to hexColor in the function
hexCol +=hexNumbers[random];
//console.log(hexCol);


}
//this is saying to use the hex color that is generated when the for loop stops
bodyBcg.style.backgroundColor = hexCol;
hex.innerHTML = hexCol;

}
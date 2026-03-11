let steps=localStorage.getItem("steps")||0;
let calories=localStorage.getItem("calories")||0;
let water=localStorage.getItem("water")||0;

function updateDashboard(){

if(document.getElementById("steps"))
document.getElementById("steps").innerText=steps;

if(document.getElementById("calories"))
document.getElementById("calories").innerText=calories;

if(document.getElementById("watercount"))
document.getElementById("watercount").innerText=water+" Glasses";

// Update water display if on water page
if(document.getElementById("water"))
updateWaterDisplay();

}

function addSteps(){
steps=parseInt(steps)+500;
localStorage.setItem("steps",steps);
updateDashboard();
}

function addCalories(){
calories=parseInt(calories)+50;
localStorage.setItem("calories",calories);
updateDashboard();
}

function drinkWater(){
water=parseInt(water)+1;
localStorage.setItem("water",water);
updateWaterDisplay();
}

function addWater(amount){
water=parseInt(water)+amount;
localStorage.setItem("water",water);
updateWaterDisplay();
}

function addCustomWater(){
let customAmount=document.getElementById("customWater").value;
if(customAmount && customAmount > 0){
water=parseInt(water)+parseInt(customAmount);
localStorage.setItem("water",water);
updateWaterDisplay();
document.getElementById("customWater").value="";
}
}

function updateWaterDisplay(){
document.getElementById("water").innerText=water+" Glasses";
let progress=Math.min((water/8)*100, 100);
document.getElementById("waterProgress").style.width=progress+"%";
}

function resetWater(){
water=0;
localStorage.setItem("water",water);
updateWaterDisplay();
}

function calculateBMI(){

let h=document.getElementById("height").value/100;
let w=document.getElementById("weight").value;

let bmi=w/(h*h);

let resultDiv=document.getElementById("bmiResult");
resultDiv.style.display="block";
resultDiv.innerHTML="<i>⚖️</i><h3>Your BMI: "+bmi.toFixed(2)+"</h3>";

}

function addActivity(){

let ex=document.getElementById("exercise").value;
let dur=document.getElementById("duration").value;

let li=document.createElement("li");

li.innerText=ex+" - "+dur+" minutes";

document.getElementById("activityList").appendChild(li);

}

updateDashboard();

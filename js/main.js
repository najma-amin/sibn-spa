$(document).ready(function() {
var modal = document.getElementById("model");
var modal2 = document.getElementById("model2");
var modal3 = document.getElementById("model3");

var btn = document.getElementById("btn-model");
var btn1 = document.getElementById("btn-model1");
var btn2 = document.getElementById("btn-model2");
var btn2 = document.getElementById("btn-model2");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("closer")[0];
var span3 = document.getElementsByClassName("closeer")[0];
console.log(span)


btn.onclick = function(){
  modal3.style.display = "block";
}
btn1.onclick = function() {
  modal2.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}

span3.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span.onclick = function() {
  modal3.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



window.onclick = function(event){
  if (event.target == modal2 ){
    modal2.style.display = 'none';
  }
}

window.onclick = function(event){
  if (event.target == modal ){
    modal.style.display = 'none';
  }
}
 

$('#reserve').click(function() {
    alert("Willing to come to Ngong ?");
    alert("We can't wait to see you");
  });

$('#reserve2').click(function() {
  alert("Willing to come to Ngong ?");
  alert("We can't wait to see you");
});

$('#reserve3').click(function() {
  alert("Willing to come to Ngong ?");
  alert("We can't wait to see you");
});


let hair = document.getElementById("hair");
let hairShave = 250;
let beard = document.getElementById("beard");
let beardStyling = 100;
let dying = document.getElementById("dying");
let dyingPrice = 350;
var totalAmount= hairShave + beardStyling + dyhairPrice;

if(hair == "hair"){
  return hairShave;
}
else if (beard == "beard"){
  return beardStyling;
}
else if (dying == "dying"){
  return dyingPrice;
}
else if (beardStyling + dyingPrice){
  return beardStyling + dyingPrice;
}
else if (beardStyling + dyhairPrice + hairShave){
  return totalAmount
}
else {
  alert("Choose a service");
}

let fullMassage = document.getElementById("full");
let fullPrice = 6500;
let lowerMassage = document.getElementById("lower");
let lowerPrice = 3000;
let upperMassage = document.getElementById("upper");
let upperPrice = 2000;
let targetMassage = document.getElementById("target");
let targetPrice = 1500;
let steamRoom = document.getElementById("steam");
let steamPrice = 300;

if(fullMassage == "full"){
  return fullPrice;
}
else if (lowerMassage == "lower"){
  return lowerPrice;
}
else if (upperMassage == "upper"){
  return upperPrice;
}
else if (targetMassage == "target"){
  return targetPrice;
}
else if (steamRoom == "steam"){
  return steamPrice;
}
else if (beardStyling + dyingPrice){
  return beardStyling + dyingPrice;
}
else if (beardStyling + dyhairPrice + hairShave){
  return totalAmount
}
else {
  alert("Choose a service");
}


let dreadLocks = document.getElementById("dread");
let dreadsPrice = 3000;
let makeup = document.getElementById("makeup");
let makeupPrice = 1500;
let manicure = document.getElementById("manicure");
let manicurePrice = 1000;
let pedicure = document.getElementById("pedicure");
let pedicurePrice = 1500;
let dyhair = document.getElementById("d-h");
let dyePrice = 500;
})
if(hair == "hair"){
  return hairShave;
}
else if (beard == "beard"){
  return beardStyling;
}
else if (dying == "dying"){
  return dyingPrice;
}
else if (beardStyling + dyingPrice){
  return beardStyling + dyingPrice;
}
else if (beardStyling + dyhairPrice + hairShave){
  return totalAmount
}
else {
  alert("Choose a service");
}

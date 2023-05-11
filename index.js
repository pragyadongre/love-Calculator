// var loveScore = Math.floor(Math.random()*100) + 1;
// loveScore = loveScore + "%";
//
// var name1 = document.getElementById("nameOne").value;
// var name2= document.getElementById("nameTwo").value;
//
//
//   document.querySelector("h1").innerHTML= "Love Calculation Results!!";
//   document.querySelector(".loveScore").innerHTML = loveScore;
//   document.querySelector(".firstPerson").innerHTML = name1;
//   document.querySelector(".secondPerson").innerHTML = name2;
// var name1 = document.getElementById("myForm").elements.item[0].value;
// document.querySelector(".firstPerson").innerHTML = name1;
// var name2 = document.getElementById("myForm2").elements.item[0].value;
// document.querySelector(".secondPerson").innerHTML = name2;
var loveScore = Math.floor(Math.random()*100) + 1;
loveScorePercent = loveScore + "%";
document.querySelector(".loveScore").innerHTML = loveScorePercent;

if(loveScore>=80){
  document.querySelector(".gyaan").innerHTML = " You both love each other like Romeo and Juliet💖";
}
else if(loveScore<80 && loveScore>=30){
  document.querySelector(".gyaan").innerHTML = " There are less chances of your love to get successful but you can increase that and make yourselves compatible by going on more dates and spending more time with each other.😊";
}
else{
  document.querySelector(".gyaan").innerHTML = " You both go along like oil and water";
}
function myFunction() {
  var name1 = document.getElementById("nameOne").value;
  var name2 = document.getElementById("nameTwo").value;
  localStorage.setItem("nameOne", name1);
  localStorage.setItem("nameTwo", name2);
}
document.addEventListener('DOMContentLoaded', function() {
  var name1 = localStorage.getItem("nameOne");
  var name2 = localStorage.getItem("nameTwo");
  var firstPersonElement = document.querySelector('.firstPerson');
  var secondPersonElement = document.querySelector('.secondPerson');
  var loveScoreElement = document.querySelector('.loveScore');

  firstPersonElement.textContent = name1;
  secondPersonElement.textContent = name2;
});

const sidebar=document.getElementById("sidebar");
const closebar=document.getElementById("close");
const leftmove=document.getElementById("leftmove");
const rightmove=document.getElementById("rightmove");
const leftmove1=document.getElementById("leftmove1");
const rightmove1=document.getElementById("rightmove1");
leftmove.onclick=() => {plusDivs(-1,"mySlides");}
rightmove.onclick=() => {plusDivs(1,"mySlides");}
leftmove1.onclick=() => {plusDivs(-1,"mySlides1");}
rightmove1.onclick=() => {plusDivs(1,"mySlides1");}
closebar.onclick=close;
sidebar.onclick=open;
function open(){
  let x=window.matchMedia("(max-width:700px)");
  if(x.matches){
    document.getElementById("myNav").style.width="50%";
  }
  else{
    document.getElementById("myNav").style.width="25%";
  }
}
function close(){
    document.getElementById("myNav").style.width="0%";
}
var slideIndex = 1;
showDivs(slideIndex,"mySlides");
showDivs(slideIndex,"mySlides1");

function plusDivs(n,v) {
  showDivs(slideIndex += n,v);
}

function showDivs(n,value) {
  let w=window.matchMedia("(max-width:700px)");
  if(w.matches){
  var i;
  var x = document.getElementsByClassName(value);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "inline-block";
}
else{
  var i;
  var x = document.getElementsByClassName(value);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "inline-block";
  }
  x[slideIndex-1].style.display = "none";

}
}
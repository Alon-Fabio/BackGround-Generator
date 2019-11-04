//from Math import random;
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var bodyToGr = document.getElementById("gradient");
var random = document.getElementById("random");

console.log(css, color1, color2, random);



function setGradient() {
    bodyToGr.style.background = "linear-gradient(to right, "+color1.value+" ,"+color2.value+")";
    
    css.textContent = bodyToGr.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

random.addEventListener("click", function() {
    color1.value = getRandomColor()
    color2.value = getRandomColor()
    bodyToGr.style.background = "linear-gradient(to right, "+ color1.value +" ,"+ color2.value +")";
    
    css.textContent = bodyToGr.style.background + ";";
})

setGradient()



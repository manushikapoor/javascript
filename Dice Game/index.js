
var randomDiceImage="dice"+(Math.floor(Math.random()*6)+1)+".png";
var randomImageSource="images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomDiceImage2="dice"+(Math.floor(Math.random()*6)+1)+".png";
var randomImageSource2="images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

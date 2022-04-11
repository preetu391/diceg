var randomNumber1= Math.floor(Math.random() * 6)+1;

var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomimage= "dice" + randomNumber2 + ".png";

var randomDiceImage="dice" + randomNumber1 + ".png";

var randomImageSource =  randomDiceImage;

var randomImageSource2 =  randomimage;

var image1 = document.querySelectorAll("img")[0];
var image2= document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

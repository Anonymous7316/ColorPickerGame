var numSquares=6;
var color = generateRandomColors(numSquares);
var choose = pickColor();
var guessColor = document.querySelector("span");
var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
guessColor.textContent = choose;


easyBtn.addEventListener("click",function(){
  message.textContent="";
  message.style.color="black";
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares=3;
  color = generateRandomColors(numSquares);
  choose = pickColor();
  guessColor.textContent = choose;
  for (var i = 0; i < square.length; i++) {
    if(color[i]){
      square[i].style.backgroundColor=color[i];
    }
    else
      square[i].style.display="none";
  }
    h1.style.backgroundColor = "steelblue";
});


hardBtn.addEventListener("click",function(){
  message.textContent="";
  message.style.color="black";
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares=6;
  color = generateRandomColors(numSquares);
  choose = pickColor();
  guessColor.textContent = choose;
  for (var i = 0; i < square.length; i++) {
      square[i].style.transition = "0.6s";
      square[i].style.backgroundColor=color[i];
      square[i].style.display="block";
  }
    h1.style.backgroundColor = "steelblue";
});


reset.addEventListener("click", function() {
  reset.textContent="New colors";
  color = generateRandomColors(numSquares);
  choose = pickColor();
  guessColor.textContent = choose;
  message.textContent="";
  message.style.color="black";
  for (var i = 0; i < square.length; i++) {
    square[i].style.transition = "0.6s";
    square[i].style.backgroundColor = color[i];
  }
  h1.style.backgroundColor = "steelblue";
});


for (var i = 0; i < square.length; i++) {
  square[i].style.transition = "0.6s";
  square[i].style.backgroundColor = color[i];
}


for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function(){
    var clickColor = this.style.backgroundColor;
    if (clickColor === choose) {
      changeColor(choose);
      message.textContent = "Correct!";
      message.style.color=choose;
      reset.textContent = "Play Again?";
    } else {
      this.style.transition = "0.6s";
      this.style.backgroundColor = "#232323";
      message.textContent = "Try again!";
    }
  });
}


function changeColor(color) {
  for (var j = 0; j < square.length; j++) {
    square[j].style.transition = "0.6s";
    square[j].style.backgroundColor = color;
  }
  h1.style.transition = "0.6s";
  h1.style.backgroundColor = color;
}


function pickColor() {
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}


function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColors());
  }
  return arr;
}


function randomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

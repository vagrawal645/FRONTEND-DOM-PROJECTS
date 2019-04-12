var numOfSq = 6;
var color = generateColors(numOfSq);
var message = document.querySelector("#message");
var pickcolor = color[pickedColor()];   
var selectrgb = document.querySelector("#colordisplay");
var squares = document.querySelectorAll(".bg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
selectrgb.textContent = pickcolor;
easy.addEventListener("click",function(){
    h1.style.backgroundColor = "steelblue";
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numOfSq = 3;
    color = generateColors(numOfSq);
    pickcolor = color[pickedColor()];
    selectrgb.textContent = pickcolor;
    for(var i=0;i<squares.length;i++){
        if(color[i]){
            squares[i].style.backgroundColor = color[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    message.textContent = "";
});
hard.addEventListener("click",function(){
    h1.style.backgroundColor = "steelblue";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numOfSq = 6;
    color = generateColors(numOfSq);
    pickcolor = color[pickedColor()];
    selectrgb.textContent = pickcolor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor = color[i];
            squares[i].style.display = "block";
    }
    message.textContent = "";
});
reset.addEventListener("click",function(){
    color = generateColors(numOfSq);
    pickcolor = color[pickedColor()];   
    selectrgb.textContent = pickcolor;
    for(var i=0;i<color.length;i++){
        squares[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New Game!";
    message.textContent = "";
});
for(var i=0;i<color.length;i++){
    squares[i].style.backgroundColor = color[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        console.log("working")
        if(clickedcolor===pickcolor){
            message.textContent="Correct!";
            changeColors(pickcolor);
            h1.style.backgroundColor = pickcolor;
            reset.textContent = "Play Again?"
        }
        else{
            message.textContent="Wrong";
            this.style.backgroundColor= "#232323";
        }
    });
}
function changeColors(colors){
    for(var i=0;i<color.length;i++){
        squares[i].style.backgroundColor = colors;
    }
}
function generateColors(x){
    var num = [];
    for(var i=0 ; i<x;i++){
        num.push(randomColor());
    }
    return num; 
}
function pickedColor(){
    var x = Math.floor(Math.random()*color.length);
    return x;
}
function randomColor(){
    var red = String(Math.floor(Math.random()*256));
    var green = String(Math.floor(Math.random()*256));
    var blue = String(Math.floor(Math.random()*256));
    var color = "rgb(" + red + ", " + green + ", "+ blue + ")";
    return(color);
}

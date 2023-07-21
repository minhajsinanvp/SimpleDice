var playerOne = Math.random()*6
var dice1 = Math.ceil(playerOne)

var playertwo= Math.random()*6
var dice2 = Math.ceil(playertwo)

var winner;


if(dice1> dice2){

    winner = "🚩Player 1 Wins!"

}

else if(dice1 < dice2){
    winner = "🚩Player 2 Wins!"
}

else{
    winner = "📍 Draw"
}



document.querySelector(".img1").setAttribute("src","./images/dice"+dice1+".png")
document.querySelector(".img2").setAttribute("src","./images/dice"+dice2+".png")



document.querySelector(".container h1").innerHTML = winner
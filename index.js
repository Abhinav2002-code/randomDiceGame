var myNumber;
var myNumber2

myNumber = (Math.floor(Math.random()*6) +1);
myNumber2 = (Math.floor(Math.random()*6) +1);


    if (myNumber === 1){
        document.querySelector(".firstDiceOne").src = "images/dice1.png";
    } else if (myNumber === 2){
        document.querySelector(".firstDiceOne").src = "images/dice2.png";
    }else if (myNumber === 3){
        document.querySelector(".firstDiceOne").src = "images/dice3.png";
    }else if (myNumber === 4){
        document.querySelector(".firstDiceOne").src = "images/dice4.png";
    }else if (myNumber === 5){
        document.querySelector(".firstDiceOne").src = "images/dice5.png";
    }else if(myNumber === 6){
        document.querySelector(".firstDiceOne").src = "images/dice6.png";
    }

    if (myNumber2 === 1){
        document.querySelector(".secondDiceOne").src = "images/dice1.png";
    } else if (myNumber2 === 2){
        document.querySelector(".secondDiceOne").src = "images/dice2.png";
    }else if (myNumber2 === 3){
        document.querySelector(".secondDiceOne").src = "images/dice3.png";
    }else if (myNumber2 === 4){
        document.querySelector(".secondDiceOne").src = "images/dice4.png";
    }else if (myNumber2 === 5){
        document.querySelector(".secondDiceOne").src = "images/dice5.png";
    }else if(myNumber2 === 6){
        document.querySelector(".secondDiceOne").src = "images/dice6.png";
    }

    if (myNumber>myNumber2){
        document.querySelector("h1").innerHTML = "Player One Wins!!";
    } else if (myNumber === myNumber2) {
        document.querySelector("h1").innerHTML = "Drawww!!";
    } else {
        document.querySelector("h1").innerHTML = "Player Two Wins!!";
    }
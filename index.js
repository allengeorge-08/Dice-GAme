let R = Math.floor ( ((Math.random()*6)+1))
let Z = Math.floor ( ((Math.random()*6)+1))
var hehe;


if (R==Z){
    hehe= "Its a Draw"
}
else if(Z>R){
    hehe="Player 2 Wins"
}
else if(R>Z){
    hehe="Player 1 Wins"
}
else{}

document.querySelector("h1").innerHTML =  hehe;

if (R==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png")
}
else if(R==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
}
else if(R==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png")
}
else if(R==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png")
}
else if(R==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png")
}
else if(R==6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png")
}
else {

}



if (Z==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png")
}
else if(Z==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
}
else if(Z==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png")
}
else if(Z==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png")
}
else if(Z==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png")
}
else if(Z==6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png")
}
else {

}


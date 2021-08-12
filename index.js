var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6+1);
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6+1);
document.querySelector(".img1").setAttribute("src","images\\dice"+randomNumber1+".png");
document.querySelector(" .img2").setAttribute("src","images\\dice"+randomNumber2+".png");
/*You can use qyerySelectorAll as well!
for ex:
querySelectorAll("img")[0].setAttribute........[continue]*/
if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
     document.querySelector("h1");
}

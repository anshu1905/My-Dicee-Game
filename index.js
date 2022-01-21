var p1=Math.floor((Math.random() * 6) + 1);
var p2=Math.floor((Math.random() * 6) + 1);

var p1_image="images/dice"+p1+".png"
var p2_image = "images/dice" + p2 +".png"


document.querySelectorAll("img")[0].setAttribute("src", p1_image);
document.querySelectorAll("img")[1].setAttribute("src", p2_image);

function dice_check(p1,p2){
    if(p1>p2)
    {
        document.querySelector('h1').textContent='🚩Player1 Wins';
    }
    else if (p1<p2)
    {
        document.querySelector('h1').textContent='Player2 Wins🚩'
    }
    else
    {
        document.querySelector('h1').textContent='🚩Tie🚩'
    }
}

console.log(p1);
console.log(p2);
dice_check(p1,p2)
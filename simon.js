let gameseq =[];
let userseq=[];

let btns= ["yellow", "red", "purple","green"];

let started = false;
let level =0;
let score = 0;

let h2 = document.querySelector("h2");
let scoreDisplay = document.querySelector("#score");

//Step-1: press any ket to start the game
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game Started...");
        started = true;
        levelup();
    }
});

//step-2: Button Flash and level up

function game_flash(btn){
 btn.classList.add("flash");
 setTimeout(function() {
    btn.classList.remove("flash");
 }, 250);
}

function user_flash(btn){
    btn.classList.add("user_flash");
    setTimeout(function() {
       btn.classList.remove("user_flash");
    }, 250);
}   

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
  

    let random_index = Math.floor(Math.random() * 4);
    let random_color = btns[random_index];
    let random_button = document.querySelector(`.${random_color}`);

     gameseq.push(random_color);
     console.log(gameseq);
    game_flash(random_button);
}

//check sequence
function checkAns(index){ 

    if(userseq[index] === gameseq[index]){
       if(userseq.length == gameseq.length){
        score++;
    scoreDisplay.innerText = `Score: ${score}`;
          setTimeout(levelup, 1000);
       }
    } else {
       h2.innerHTML= `Game over! <b>Your Score was ${score}</b> <br> Press any key to Restart`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function() {
        document.querySelector("body").style.backgroundColor="white";
       }, 200);
       reset();
    }
   }

//Step-3: Event-listeners

function btnpress(){
    // console.log(this);
    let btn = this;
    user_flash(btn);

    let userColor= btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns =document.querySelectorAll(".btn");

for(let btn of allbtns){
  btn.addEventListener("click", btnpress)
}



//reset
function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
    score=0;
    scoreDisplay.innerText = `Score: ${score}`;
}

var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")


var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [] ;


function play(){
var userguesses = document.getElementById("userInput").value;
if(userguesses < 1 || userguesses > 100){
 alert("please enter a number between 1 and 100.");
}

else {
    guessed_nums.push(userguesses);
    no_of_guesses+= 1;

if (userguesses < answer){
    msg1.textContent = "your guess is too low.";
    msg2.textContent = "no of guesses:" + no_of_guesses;
    msg3.textContent = " guessed  number are :" + guessed_num;
 }
else if (userguesses > answer){
    msg1.textContent = "your guess is too high.";
    msg2.textContent = "no of guesses:" + no_of_guesses;
    msg3.textContent= " guessed  number are :" + guessed_num;
}
else if(userguesses == answer){
    msg1.textContent ="yippie you win!.";
    msg2.textContent ="the number was " + answer;
    msg3.textContent = " guessed  number are :" + no_of_guesses + "guesses";
    // document.getElementById("btn").disabled = true;
}
}

 };
  var clearbtn = document.getElementById("mybtn")
  clearbtn.addEventListener("click", function(){
    document.location.reload();

 })
 
 
 
 








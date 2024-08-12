/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.
*/

let gameNum = 25;

let userNum = prompt("Guess the Number  : ");

while(userNum != gameNum){
    userNum = prompt("You entered a wrong number , please insert again  : ");

}
console.log("Congratulations , you enter the right number ");
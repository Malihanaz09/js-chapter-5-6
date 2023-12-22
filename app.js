// // PRACTICE EXERCISE # 5.1
// const maxValue = 20; 
// const randomNumber = Math.floor(Math.random() * maxValue) + 1;
// let isCorrect = false;
 
// console.log("Random Number:", randomNumber);
// const userGuess = 5;
// if (userGuess === randomNumber) {
//     isCorrect = true;
// }
// if (isCorrect) {
//     console.log("Congratulations! Your guess is correct!");
// } else {
//     console.log("Sorry, your guess is incorrect. Try again!");
// }

// //       ASK SOME NUMBER FROM USER
// let randomNum = Math.floor(Math.random() * 5)
// let user =[]
// for(i = 0; i <=randomNum; i++){
//   user[i] = prompt("Enter a number between 1 and 5: ")
//   if(i == randomNum){
//     alert("Congratulation! Your guess is correct")
//   }
//   else{
//     alert("Sorry Your guess is incorrect. Try again")
//   }
// }
//        PRACTICD EXERCISE 5.2
// let counter = 0
// let step = 10
// while (counter += step) {
//     console.log("Counter:", counter)
//     counter += step
//     if (counter >= 100){
//         break }
//     }

 //         PRACTICD EXERCISE 5.3
// let myWork = []
// for(i =1; i<=10; i++){
//   let lesson = [{
//     Name: "lesson 1"+ i,
//     Status: "Status"
//   }]
//   myWork.push(lesson)
// }
// console.log(myWork)

//            PRACTICD EXERCISE 5.4
// let myTable = [];
// for (let i = 0; i < 3; i++){
// myTable.push([]);
// for (let j = 0; j < 5; j++) {
// myTable[i].push(j);
// }
// }
// console.log(myTable)

//           PRACTICD EXERCISE 5.6
// let arry = []
// for(k=1; k<=10; k++){
//   k = ["hye", "hello", "How are you"]
//   arry.push(k)
// }
// console.log(arry)
// console.log("Using for loop:");
// for (var i = 0; i < arry.length; i++) {
//     console.log(arry[i]);
// }
// console.log("Using for...of loop:");
// for (var value of arry) {
//     console.log(value);
// }

//           PRACTICE EXERCISE 5.7
// let car = {
//   name:"RoseRoyal",
//   color:"red",
//   year:"2023"
// }
// for(let prop in car){
//   console.log(car[prop])
// }
// for(let prop in car){
//   console.log(prop)
// }

//        Chapter project
// var multiplicationTable = [];

// var maxValue = 5; 
// for (var i = 1; i <= maxValue; i++) {
//       var row = [];
//     for (var j = 1; j <= maxValue; j++) {
//         var result = i * j;
//         row.push(result);
//     }
//     multiplicationTable.push(row);
// }
// console.log("Multiplication Table:");
// for (var i = 0; i < multiplicationTable.length; i++) {
//     console.log(multiplicationTable[i].join('\t'));
// }

//      "CHAPTER # 6"

//        Practice exercise 6.2
// function add(para1, para2){
//   return para1 + para2
// }
// let arg1 = 77
// let arg2 = 33
// console.log(add(arg1, arg2))

// //        Practice exercise 6.2
// var descriptiveWords = ["Creative", "Ambitious", "Friendly", "Determined", "Energetic", "Adventurous", "Kind", "Resourceful"];
// function que(){
//   let userName = prompt("What can i call you?")
//   let randomNo = Math.floor(Math.random()*descriptiveWords.length)
//   let randomWord = descriptiveWords[randomNo]
//   console.log((userName) + " " + (randomWord))
// }
// que()
// //        Practice exercise 6.3
var num1 = 10;
var num2 = 5;
var operator = "+";
function performOperation(value1, value2, operator) {
    if (operator === "+") {
        return value1 + value2;
    } else if (operator === "-") {
        return value1 - value2;
    } else {
        console.log("Invalid operator. Defaulting to addition.");
        return value1 + value2;
    }
}
console.log("Result 1:", performOperation(num1, num2, operator));
operator = "-";
console.log("Result 2:", performOperation(num1, num2, operator));



// //        Practice exercise 6.8
// var printNameFunction = function(name) {
//   console.log("Function Expression:", name);
// };
// printNameFunction("John")
// function printNameDeclaration(name) {
//   console.log("Function Declaration:", name);
// }
// printNameDeclaration("Jane");


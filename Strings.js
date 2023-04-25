//Examples of using string length, string split, array.join

var funStr = "Emma shreds on her electric cello";
console.log(typeof funStr); // "string"
var oneChar = funStr[26]; // "c"
console.log(typeof oneChar); // "string"

//Length Method
console.log(funStr.length); // 33
console.log("".length); // 0

//Split method (converts string to array, splitting on the provided parameter)
//Splits a string up and next splits a string into separate letters
wordArray = funStr.split(" "); 
// Note: " " never appears in result: 
// [ "Emma", "shreds", "on", "her",
// "electric", "cello" ]
// console.log(wordArray [5].split(""); 
// Split on every letter:
// [ "c", "e", "l", "l", "o" ]  


//Join Method
//converts array to string using provided parameter as separator

console.log(wordArray.join()); 
// Note: "," is used by default:
// "Emma,shreds,on,her,electric,cello"
console.log(wordArray.join("-")); 
// Param "-" inserted between words:
// "Emma-shreds-on-her-electric-cello"
console.log(wordArray.join("")); 
// "Emmashredsonherelectriccello"


//Challenge what does this display?
console.log(1 + 2 + "3" + "4" + 5 + 6)
//Answer: 33456
//Why? Num + Num is a num, but num + str or str + num is a str
//1+2==3. 3+"3"=="33". "334"+5=="3345".
/*
let str1 = prompt("Enter at least two words for reversing them: ");
// breaking into array
let str1WordArr = str1.split(" ");
// temp array to hold the reverse string
let reverseWord = [];
// can iterate the loop backward
for (let i = str1WordArr.length - 1; i >= 0; i--) {
  // pushing the reverse of words into new array
  reverseWord.push(str1WordArr[i]);
}
// join the words array
console.log(reverseWord.join(" ")); 
*/

// to reverse every chars in given string
function reverseWord(sentence) {
  return sentence
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
document.write(reverseWord(prompt("Enter a word to reverse them: ")));

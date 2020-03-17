//reverse array without using splice, reverse, and join method
let stringArr = []
let newArr = []
let word = ''

function splice(string) {
  
  for(i = 0; i < string.length; i++) {
    let value = string[i];
    stringArr.push(value)
  } 
  return stringArr;
}

splice("hello")
console.log(stringArr)

function reverse(stringArr) {
  for(let i = 0; i < stringArr.length; i++) {
    let char = stringArr[stringArr.length-(i+1)];
    newArr.push(char);
    
  }
  return newArr;
}


reverse(stringArr);
console.log(newArr)

function join(newArr) {
  
  for(let i = 0; i < newArr.length; i++) {
      word += newArr[i]
    
  }
  return word;
  
}

join(newArr);
console.log(word)


//reverse array with splice, reverse, and join method

let splitString = "hello".split("");
console.log(splitString);

let reverseString = splitString.reverse();
console.log(reverseString);

let joinString = reverseString.join("");
console.log(joinString)



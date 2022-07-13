function boolToWord(bool) {
  //...
  if (bool === true) {
    return "Yes";
  } else if (bool === false) {
    return "No";
  }
}

//   Your task is to create a function that does four basic mathematical operations.

//   The function should take three arguments - operation(string/char), value1(number), value2(number).
//   The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

//
//  A hero is on his way to the castle to complete his mission.
//  However, he's been told that the castle is surrounded with a couple of powerful
//  dragons! each dragon takes 2
//  bullets to be defeated, our hero has no idea how many bullets he should carry..
//  Assuming he's gonna grab a specific given number of bullets and move forward to fight another
//  specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    //Get Coding!
      let enemies = dragons * 2
      if( bullets>= enemies){
        return true
      }else{
        return false
      }
    }
   
    
 // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

 function even_or_odd(number) {
    if(number%2 === 0){
      return "Even"
    }else{
     return "Odd"
    }
  }


  function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace(/T/g,"U")
  }


  const rps = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  };

//   You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if(distanceToPump > mpg * fuelLeft) {
      return false
    }else{
      return true
    }
  };

  const multiply = (a,b) =>{
    return a * b
   }

   function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

  // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

  function reverseWords(str) {
    // Go for it
    let reverseArray = str.split("").reverse()
    let newString = (reverseArray.join(' ').split("  ").reverse().join())
    let finalString = newString.replace(/ +/g, "").replace(/,/g," ")
    return finalString
  
  }

  // Your task is to make a function that can take any non-negative integer as an argument
  // and return it with its digits in descending order. Essentially, rearrange the digits to create 
  //the highest possible number.

  function descendingOrder(n){
    //...
  let newString =  n.toString().split("").sort().reverse().join().replace(/,/g, "")
  let newNumber = Number(newString)
  return newNumber
  
  }

  //implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length
   //and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a,b,c)
{
  let trianleSum =  a + b + c
  if(a + b < c || a+b === c){
    return false
  }else if(a+c< b || a+c === b){
    return false
  }else if( b+c<a || b+c === a){
   return false
}else{
  return true
}
  }
//LEETCODE PROBLEM
//   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i=0; i<nums.length;i++)
      for(let t = i+1;t<nums.length ;t++)
          if(nums[i] + nums[t] === target)
              return [i,t]
};
//is both numbers divisble by number
function isDivideBy(number, a, b) {
  // good luck
  let isTrue = true
 if(number % a === 0 && number % b === 0){
   return isTrue = true
 }else{
   return isTrue = false
 }
  return isTrue
}

//return sentence form array
function smash (words) {
  return words.join(" ")
};

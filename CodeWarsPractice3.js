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
  
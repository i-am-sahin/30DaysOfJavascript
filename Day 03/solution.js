// ## Challenge 3:
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

function Day03(a,b){
    if((50 <= a && a < 100) || (50 <= b && b < 100)){
        return true;

    }
}

console.log(Day03(70,65));
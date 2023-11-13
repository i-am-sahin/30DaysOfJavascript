// **Challenge 7**  
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function checkPairs(a,b){
    if((a + b ) == 50 || a == 50 || b == 50){
        return true;
    }
}
console.log(checkPairs(25,25));
console.log(checkPairs(30,20));
console.log(checkPairs(20,50));
console.log(checkPairs(25,5));

// **Challenge 6**  
// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function Day06( a,  b){
    if(a == b){
        return 3* (a + b);
    }
    else{
        return a + b;
    }
}

console.log(Day06(5,5));
console.log(Day06(4,9));
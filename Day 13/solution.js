/*
**Challenge 13**
Problem Statement: Implement a memoization function.

Description: Write a function that takes a function as its argument and returns a memoized version of the function.

Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
*/ 


function memoize(func) {
    let cache = {}
    return function (...args) {
        const key = JSON.stringify(args)
        if (!cache[key])
            cache[key] = func(...args)
        return cache[key]
    }
}
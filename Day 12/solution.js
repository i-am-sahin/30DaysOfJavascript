/*
Challenge 12
Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output:
"14:37:42"
"14:37:43"
 "14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"

*/

function getTime() {
    let now = new Date();
    // let hours = now.getHours();
    // let minutes = now.getMinutes();
    // let seconds = now.getSeconds();

    return now.toLocaleTimeString('it-IT',
        {
            timeZone: 'Asia/Kolkata',
        });
}

setInterval(() => {
    console.log(`"${getTime()}"`)
}, 1000);
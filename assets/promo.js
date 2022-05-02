let deadline = new Date("may 10, 2022 12:00:00").getTime();

let x = setInterval(function() {

let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days < 10 ? '0' + days:days;
document.getElementById("hour").innerHTML =hours < 10 ? '0' + hours:hours;
document.getElementById("minute").innerHTML = minutes < 10 ? '0' + minutes:minutes; 
document.getElementById("second").innerHTML =seconds < 10 ? '0' + seconds : seconds; 

if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "offre expirée";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0'; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);

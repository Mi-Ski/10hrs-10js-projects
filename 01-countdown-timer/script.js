const christmas = "24 Dec 2020";

let calcDate = () => {
    const christmasDate = new Date(christmas);
    const now = new Date();
    const totalSeconds = Math.floor((christmasDate - now) / 1000);
    const days = Math.floor(totalSeconds / 24 / 3600);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = totalSeconds % 60;

    console.log(days, hours, minutes, seconds);

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
calcDate();

setInterval(calcDate, 1000)
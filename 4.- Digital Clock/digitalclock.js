function updateClock(){

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    const hoursElements = document.getElementById("hours");
    const minutesElements = document.getElementById("minutes");
    const secondsElements = document.getElementById("seconds");

    hoursElements.textContent = hours;
    minutesElements.textContent = minutes;
    secondsElements.textContent = seconds;

}


setInterval(updateClock,1000);
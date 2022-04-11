const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentTheme = "light";

function time() {
    // https://www.w3schools.com/js/js_date_methods.asp
    var date = new Date()
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var format = "";    // AM or PM

    // Set format (AM or PM)
    if (hour >= 12) {
        format = "PM";
    }
    else {
        format = "AM";
    }

    // Set time to 12 hour format
    if (hour == 0) {
        hour = 12;
    }
    else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    // Append 0 to all single-digit time elements for formatting purposes (minute, seconds)
    minute = update(minute);
    second = update(second);

    // Get the current day
    let day = days[date.getDay()];
    document.getElementsByClassName("day")[0].innerText = day;

    // Get the current date and time
    let month = months[date.getMonth()];
    document.getElementsByClassName("date")[0].innerText = month + " " + date.getDate();
    // document.getElementById("date").innerText = month + " " + date.getDate();
    document.getElementsByClassName("time")[0].innerText = hour + ":" + minute + " " + format;
    // document.getElementById("time").innerText = hour + ":" + minute + " " + format;

    // Update the clock every second
    setTimeout(time, 1000)
}

function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    currentTheme = "dark";
}

time();
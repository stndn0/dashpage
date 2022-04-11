function time() {
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

    hour = update(hour);
    minute = update(minute);
    second = update(second);
    document.getElementById("time").innerText = hour + ":" + minute + " " + format;
    // document.getElementById("time").innerText = hour + ":" + minute + ":" + second + " " + format;

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

function date() {
    
}


time();
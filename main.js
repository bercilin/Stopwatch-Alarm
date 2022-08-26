// DIGITAL CLOCK



function showTime() {
    let time = new Date();                              // STORE TIME IN A VARIABLE
    let hours = time.getHours();                        // GET HOURS
    let minute = time.getMinutes();                     // GET MINUTES
    let seconds = time.getSeconds();                    // GET SECONDS
    let session = document.getElementById('session');   // GET SESSION



    //CONDITION TO DECIDE AM & PM
    if (hours >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }

    if (hours > 12) {
        hours -= 12;
    }


    // DISPLAY OUTPUT


    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;
}


setInterval(showTime, 10);

// DIGITAL CLOCK DONE



// ALARM CLOCK



var audio = new Audio('./src/audio.mp3');

function alarmTime() {

    // GET INPUT FROM USER

    const aHour = document.getElementById('ahour').value;
    const aMinute = document.getElementById('aminute').value;
    const aSession = document.getElementById('asession').value;


    // GET PRESENT TIME


    let time = new Date();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let session;



    if (hours >= 12) {
        session = 'PM';
    }
    else {
        session = 'AM';
    }



    if (hours > 12) {
        hours = hours - 12;
    }


    //CONDITION THAT ACTIVATES ALARM


    if (hours == aHour && minute == aMinute && session == aSession) {

        audio.play();
    }


}



var interval;
// CREATE ALARM FUN


function start() {
    interval = setInterval(alarmTime, 10);
}
// STOP ALARM FUN


function stop() {

    clearInterval(interval);
    audio.pause();
    document.getElementById('ahour').value = '00';
    document.getElementById('aminute').value = '00';

}

// TRIGERS THE START & STOP FUNCTION

document.getElementById("create-alarm").addEventListener("click", start);
document.getElementById("cancel-alarm").addEventListener("click", stop);


// ALARM CLOCK DONE


// STOPWATCH


let [s_Milliseconds, s_Seconds, s_Minutes, s_Hours] = [0, 0, 0, 0];
let timerRef = document.getElementById('stopwatch');
let int;

document.getElementById('startTimer').addEventListener('click', () => {
    int = setInterval(displayTimer, 10);
});


document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int);
});


document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [s_Milliseconds, s_Seconds, s_Minutes, s_Hours] = [0, 0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00 : 000"
});


function displayTimer() {
    s_Milliseconds += 10;
    if (s_Milliseconds == 1000) {
        s_Milliseconds = 0;
        s_Seconds++;
        if (s_Seconds == 60) {
            s_Seconds = 0;
            s_Minutes++;
            if (s_Minutes == 60) {
                s_Minutes = 0;
                s_Hours++;

            }
        }
    }

    let h = s_Hours < 10 ? "0" + s_Hours : s_Hours;
    let m = s_Minutes < 10 ? "0" + s_Minutes : s_Minutes;
    let s = s_Seconds < 10 ? "0" + s_Seconds : s_Seconds;
    let ms = s_Milliseconds < 10 ? "00" + s_Milliseconds : s_Milliseconds < 100 ? "0" + s_Milliseconds : s_Milliseconds;


    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;


}



// STOPWATCH DONE

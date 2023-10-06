let timer= document.querySelector('.timer');
let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

// Making minutes,seconds, msecs zero

let msec = 00;
let sec = 00;
let min = 00;

let timerId = null;
 
startbtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = `00 : 00 : 00`;
    msec = sec = min = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec=0;
        sec++;
        if(sec == 60){
            sec==0;
            min++;
        }

    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = sec < 10 ? `0${sec}` : sec;
    let minsString = min < 10 ? `0${min}` : min;
    

    timer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

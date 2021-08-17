let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef= document.querySelector('.timerDisplay');
let int;

// Trabajando con el Pause BOTON
document.getElementById('pauseTimer').addEventListener('click', () =>{
    clearInterval(int);
})

// Trabajando Reset boton
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML='00: 00: 00: 000';
})

// Trabajando con el startboton
document.getElementById('startTimer').addEventListener('click', () => {
    int=setInterval(displayTimer,10)
});

// Al hacer click se activa esta funcion
function displayTimer(){
    milliseconds+=10;
    if (milliseconds == 1000){
        milliseconds = 0;
        seconds ++;
        if (seconds == 60){
            seconds = 0;
            minutes ++;
            if (minutes == 60){
                minutes=0;
                hours++;
            }
        }
    }
    // Ternary operation
    // si hours<10 si es true ? '0' + 0 = 00 si es false : hours
    let h= hours < 10 ? '0' + hours : hours;
    
    /* if (hours < 10) {
        '0' + hours
    } else {
    hours
    }*/ 

    let m= minutes < 10 ? '0' + minutes : minutes;
    let s= seconds < 10 ? '0' + seconds : seconds;
    // milliseconds < 10 si es true ? '000' se hace otra validacion : milliseconds < 100 si es true '00' is es false se queda con milliseconds
    let ms= milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    // innerHTML asigna datos o contenido al div
    timerRef.innerHTML= `${h} : ${m} : ${s} : ${ms}`;
}

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const archiwBtn = document.querySelector('.archiw')
const modalBtn = document.querySelector('.modalBtn')

const stoper = document.querySelector('.stoper')
const time = document.querySelector('.time')
const listTime = document.querySelector('ul')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
const brushBtn = document.querySelector('.brush')
const colors = document.querySelector('.colors')





let timeInterval;
let seconds = 0;
let minutes = 0;
let arrTimes = []

const startStoper = () => {

clearInterval(timeInterval)
    
timeInterval = setInterval(() => {

if (seconds < 9) {

seconds++;
stoper.textContent = `${minutes}:0${seconds}`;

} 

 else if (seconds >= 9 && seconds < 59) {


seconds++ ;
stoper.textContent = `${minutes}:${seconds}`;

} 

else if (seconds === 59) {



seconds  = 0;
minutes++;
stoper.textContent = `${minutes}: 0${seconds} `;


}


}, 100)

}

const pauseStoper = () => {

    clearInterval(timeInterval)

}

const stopStoper = () => {

    if (stoper.textContent !== '0:00') {
    clearInterval(timeInterval);
    time.textContent = stoper.textContent;
    time.style.visibility = 'visible';
    seconds = 0;
    minutes = 0; 
    arrTimes.push(stoper.textContent)
    stoper.textContent = "0:00";
    }
}

const resetStoper = () => {
    
    clearInterval(timeInterval);
    stoper.textContent = '0:00';
    minutes = 0;
    seconds = 0;
    arrTimes = [];
    time.textContent = '0:00';
    time.style.visibility = 'hidden';
    listTime.textContent = ''


}

const archiwStoper = () => {


    listTime.textContent = ''
    let num = 1;
    arrTimes.forEach( el => {
       const li = document.createElement('li')
       li.innerHTML =   `<span>Pomiar numer ${ num } - </span> ${el}`
       listTime.appendChild(li)
       num++
    })
}

const toggleModal = () => {


    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }
    else
    {
        modal.style.display = 'block';
    }

}

const showColors = () => {

console.log('dziala')

colors.classList.toggle('active')

}

const arrColor = document.querySelectorAll('.color')

const changeColor = (e) => {

 const color  = e.target.dataset.color
 const root = document.documentElement;
 root.style.setProperty('--second-color', color);
 



}
    

arrColor.forEach((color) => {
    color.addEventListener('click', changeColor)
})

brushBtn.addEventListener('click', showColors)
startBtn.addEventListener('click', startStoper);
pauseBtn.addEventListener('click', pauseStoper);
stopBtn.addEventListener('click', stopStoper);
resetBtn.addEventListener('click', resetStoper);
archiwBtn.addEventListener('click', archiwStoper);
modalBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
window.addEventListener('click', e => e.target === modal ? toggleModal() :false)



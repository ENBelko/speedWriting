document.addEventListener('DOMContentLoaded',init);
/*const start = document.querySelector('#start');
start.addEventListener('click', init);*/


//Globals
const levels = {
    easy: 5,
    medium: 3,
    hardcore: 1
};

const currentLevel = levels.easy;

/*let currentLevel = levels.easy;
const level = document.querySelector('#level-select');
level.addEventListener('change', setLevel);*/


/*function setLevel(e) {
    currentLevel = levels[e.target.value];
    seconds.innerHTML = currentLevel;
}*/


let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'bitch',
    'cock',
    'super',
    'super-duper',
    'awesome',
    'человек',
    'cool',
    'cold',
    'summer',
    'detail',
    'new-year',
    'enough'
];

function init() {
    //alert(currentLevel);
    seconds.innerHTML = currentLevel;
    //load word from array
    showWord(words);
    wordInput.focus();
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}

function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'fuck yeah!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

//pick and show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'you are done douchebag!'
        score = -1;
    }
}

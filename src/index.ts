import { lessons } from './lessons/lesson.index';

// start here

let count = 0;
let numLessons = lessons.length;
let nextButton = document.getElementById('nextbt');
let prevButton = document.getElementById('prevbt');

init();

// define all functions here

function init() {
    // jump to lesson
    let currentLesson = Number(window.location.search.split('=')[1]);
    if (currentLesson && currentLesson >= 1 && currentLesson <= numLessons) {
        count = currentLesson - 1;
        console.log('current url index = ' + count);
        nextStep(1);
    }

    // init lesson
    updateButtons();
    nextButton.onclick = () => {
        nextStep(1);
    };
    prevButton.onclick = () => {
        nextStep(-1);
    };
}

function updateButtons() {
    count <= 1 ? prevButton.hidden = true : prevButton.hidden = false;
    count >= numLessons ? nextButton.hidden = true : nextButton.hidden = false;
}

function nextStep(step: number) {

    let index = count - 1;

    if (index >= 0 && lessons[index].active) {
        lessons[index].active = false;
        lessons[index].end();
    }

    count += step;
    index += step;

    lessons[index].active = true;
    lessons[index].init();

    updateButtons();
}

/**
 * import each lesson as a module
 */

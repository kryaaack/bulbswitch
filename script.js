'use strict';

let switcher = document.querySelector('#check'),
    parentLamp = document.querySelector('.lamp'),
    myLamp = parentLamp.querySelector('.lighter'),
    topOfLighter = myLamp.querySelector('.topOfLighter');

function switchLamp() {
    if (switcher.checked) {
        topOfLighter.style = "fill: #ffcb5a";
        document.body.style = "background-color:" + "#1d1d1d";
    } else {
        topOfLighter.style = "fill: #aaaaaa";
        document.body.style = "background-color:" + "#ffffff";
    }
}

switcher.addEventListener('change', switchLamp);

const { app, BrowserWindow } = require('electron');
const remote = require('electron').remote;
let win

const min = document.getElementById('min');
const max = document.getElementById('max');
const close = document.getElementById('close');


min.addEventListener('click', minimizeFn)
max.addEventListener('click', maximizeFn)
close.addEventListener('click', closeFn)

/**
 * 
 * @param {Minimize} e 
 */
function minimizeFn(e) {

    remote.getCurrentWindow().minimize();
}

/**
 * 
 * @param {Maximize} e 
 */
function maximizeFn(e) {

    let window = remote.getCurrentWindow()
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
}

/**
 * 
 * @param {Close Window} e 
 */

function closeFn(e) {
    remote.getCurrentWindow().close();
}
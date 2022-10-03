const message = document.getElementById("message");
const light1 = document.getElementById("light_1");
const light2 = document.getElementById("light_2");
const light3 = document.getElementById("light_3");
const light4 = document.getElementById("light_4");
const light5 = document.getElementById("light_5");

function onA() {
    light1.setAttribute("src", "images/light_1.jpg");
    message.innerHTML = "light #1 is on";
}

function onB() {
    light2.setAttribute("src", "images/light_2.jpg");
    message.innerHTML = "light #2 is on";
}

function onC() {
    light3.setAttribute("src", "images/light_3.jpg");
    message.innerHTML = "light #3 is on";
}

function onD() {
    light4.setAttribute("src", "images/light_4.jpg");
    message.innerHTML = "light #4 is on";
}

function onE() {
    light5.setAttribute("src", "images/light_5.jpg");
    message.innerHTML = "light #5 is on";
}

function oFF() {
    light1.setAttribute("src", "images/light_0.jpg");
    light2.setAttribute("src", "images/light_0.jpg");
    light3.setAttribute("src", "images/light_0.jpg");
    light4.setAttribute("src", "images/light_0.jpg");
    light5.setAttribute("src", "images/light_0.jpg");

    message.innerHTML = "Click button to turn on/off light";
}

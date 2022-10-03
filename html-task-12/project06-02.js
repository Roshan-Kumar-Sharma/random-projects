"use strict";
//creat a node list of all elements matching CSS selector
window.addEventListener("load", function () {
    //for loop to that iterates through all of content of the allselect
    const allSelect = document.querySelectorAll(" #govLinks .optionLinks");

    for (let i = 0; i < allSelect.length; i++) {
        //apply an onchange eventHandler
        allSelect[i].addEventListener("change", function (evt) {
            //retrieve the value property of evt.target and store it in linkURL
            const linkURL = evt.target.value;

            //OPEN a new browser window
            let newWin;
            newWin = window.open(linkURL);
        });
    }
});

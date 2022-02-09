window.onload = function() {
    const container = document.getElementById("container");

    flightTicketData = JSON.parse(localStorage.getItem("flightTicketData"))

    for (let entry of Object.entries(flightTicketData)) {
        let dom = `<div class="heading">
                        ${entry[0].toUpperCase()}: <span class="value">${entry[1]}</span>
                    </div> `;
        dom = HTMLdom(dom);
        container.append(dom);
    }
}

function HTMLdom(elem) {
    const template = document.createElement("template");
    template.innerHTML = elem;
    return template.content.firstChild;
}

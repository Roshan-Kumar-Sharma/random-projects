window.onload = () => {
    alert("Welcome to Question 1");
    let name;
    while (1) {
        name = prompt("Enter first name(all letters): ");
        const letters = /^[A-Za-z]+$/;

        if (!name.match(letters)) {
            continue;
        } else {
            break;
        }
    }

    renderFirstDiv(name);

    renderSecondDiv();
};

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let random;

function renderFirstDiv(name) {
    let date = new Date();
    let dateString = "";
    dateString += `${dayNames[date.getDay()]}, ${
        monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    document.getElementById("date").innerHTML = dateString;

    setInterval(() => {
        DisplayCurrentTime();
    }, 1000);

    document.getElementById("name").innerHTML = `${name} is logged in`;
}

function DisplayCurrentTime() {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "pm" : "am";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    var lblTime = document.getElementById("time");
    lblTime.innerHTML = time;
}

function renderSecondDiv() {
    const seedInput = document.getElementById("seedInput");
    const submit = document.getElementById("submit");

    random = Math.floor(Math.random() * 10);
    seedInput.value = random;

    renderThirdDiv();

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (Number.isInteger(parseInt(seedInput.value))) {
            const num = parseInt(seedInput.value);
            random = num;
            const table = document.getElementById("table");
            table.removeChild(table.children[1]);
        } else {
            seedInput.value = random;
        }
        renderThirdDiv();
    });
}

function renderThirdDiv() {
    document.getElementById("number").innerHTML = random;
    const table = document.getElementById("table");
    let tableRows = `<tbody>`;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i * random;
        tableRows += `<tr>
      <th>${i} x ${random} =</th>
      <th>${i * random}</th>
    </tr>`;
    }

    tableRows += `<tr>
      <th>Column Sum</th>
      <th>${sum}</th>
    </tr></tbody>`;

    const dom = HTML(tableRows);
    table.append(dom);
}

function HTML(dom) {
    const template = document.createElement("template");
    template.innerHTML = dom;
    return template.content.firstChild;
}

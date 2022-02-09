const myForm = document.getElementById('myForm');
let flightTicketData = {}

function formHandler(e){
    e.preventDefault()

    const formData = new FormData(myForm);

    for(let entries of formData){
        flightTicketData[entries[0]] = entries[1];
    }

    let price = parseInt(flightTicketData["price"]);
    price += (price * 0.13)
    flightTicketData["price"] = price;

    flightTicketData["date"] = flightTicketData["dateAndTime"].split('T')[0].split('-').reverse().join('-')

    let time = flightTicketData["dateAndTime"].split("T")[1];
    let hours = parseInt(time.split(':')[0])
    let minutes = time.split(':')[1]
    let AmOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = hours.toString();
    time = (hours.length < 2 ? "0" + hours : hours) + ":" + minutes + " " + AmOrPm 
    flightTicketData["time"] = time;

    delete flightTicketData["dateAndTime"]

    localStorage.setItem("flightTicketData", JSON.stringify(flightTicketData))

    location.replace('http://127.0.0.1:5500/info.html');
}
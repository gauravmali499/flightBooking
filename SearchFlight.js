var json = {
    "destinations": [
        {
            "id": 1,
            "name": "City B"
        },
        {
            "id": 2,
            "name": "City D"
        },
        {
            "id": 3,
            "name": "City F"
        },
        {
            "id": 4,
            "name": "City M"
        },
        {
            "id": 5,
            "name": "City P"
        }
    ],
    "sources": [
        {
            "id": 1,
            "name": "City A"
        },
        {
            "id": 2,
            "name": "City C"
        },
        {
            "id": 3,
            "name": "City E"
        },
        {
            "id": 4,
            "name": "City T"
        },
        {
            "id": 5,
            "name": "City U"
        },
        {
            "id": 6,
            "name": "City K"
        }
    ],
    "flights": [
        {
            "flightID": 1,
            "name": "Flight 1",
            "price": 300,
            "sourceID": 1,
            "destinationID": 2,
            "departureDate": "2023-12-15"
        },
        {
            "flightID": 2,
            "name": "Flight 2",
            "price": 250,
            "sourceID": 3,
            "destinationID": 4,
            "departureDate": "2023-12-18"
        },
        {
            "flightID": 3,
            "name": "Flight 3",
            "price": 400,
            "sourceID": 5,
            "destinationID": 6,
            "departureDate": "2023-12-20"
        },
        {
            "flightID": 4,
            "name": "Flight 4",
            "price": 350,
            "sourceID": 2,
            "destinationID": 1,
            "departureDate": "2023-12-22"
        },
        {
            "flightID": 5,
            "name": "Flight 5",
            "price": 280,
            "sourceID": 4,
            "destinationID": 3,
            "departureDate": "2023-12-25"
        },
        {
            "flightID": 6,
            "name": "Flight 6",
            "price": 420,
            "sourceID": 6,
            "destinationID": 5,
            "departureDate": "2023-12-28"
        },
        {
            "flightID": 7,
            "name": "Flight 7",
            "price": 320,
            "sourceID": 1,
            "destinationID": 3,
            "departureDate": "2023-12-30"
        },
        {
            "flightID": 8,
            "name": "Flight 8",
            "price": 260,
            "sourceID": 3,
            "destinationID": 5,
            "departureDate": "2024-01-02"
        },
        {
            "flightID": 9,
            "name": "Flight 9",
            "price": 380,
            "sourceID": 5,
            "destinationID": 1,
            "departureDate": "2024-01-05"
        },
        {
            "flightID": 10,
            "name": "Flight 10",
            "price": 310,
            "sourceID": 2,
            "destinationID": 4,
            "departureDate": "2024-01-08"
        }
    ]
 };

var arr = [];
var todayDate = "2024-01-02";
var fifteenDate = "2024-01-17"
var source = document.getElementById("Source");
for (let i = 0; i < json.sources.length; i++) {
    source.innerHTML += `<option id="${json.sources[i].id}" value="${json.sources[i].name}">${json.sources[i].name}</option>`;
}


var destination = document.getElementById("Destination");
for (let j = 0; j < json.destinations.length; j++) {
    destination.innerHTML += `<option id="${json.destinations[j].id}" value="${json.destinations[j].name}">${json.destinations[j].name}</option>`;
}

var table = document.getElementById("FlightList");
for (let i = 0; i < json.flights.length; i++) {
    if((new Date(json.flights[i].departureDate) >= new Date(todayDate)) && (new Date(json.flights[i].departureDate) < new Date(fifteenDate))){
        arr.push(json.flights[i].flightID);
        var row = table.insertRow();
        row.setAttribute("id", `item${json.flights[i].flightID}`);
        row.insertCell(0).innerHTML = json.flights[i].name;
        row.insertCell(1).innerHTML = source_name(json.flights[i].sourceID);
        row.insertCell(2).innerHTML = destination_name(json.flights[i].destinationID);
        row.insertCell(3).innerHTML = json.flights[i].price;
        row.insertCell(4).innerHTML = `<button type="button" id="btnBook${json.flights[i].flightID}"><a href="BookFlight.html?id=${json.flights[i].flightID}">Book</a></button>`
    }
}
console.log(arr)

function searchFlight(){
    for (let j = arr.length; j > 1; j--) {
        table.deleteRow(j);
    }
    table.deleteRow(2);
    var date = document.getElementById("departureDate").value;
    for (let i = 0; i < json.flights.length; i++) {
        if(new Date(date) > new Date(todayDate)){
            if ((source_id(source.value) == json.flights[i].sourceID) && (destination_id(destination.value) == json.flights[i].destinationID) && (date == json.flights[i].departureDate) ) {
                var row = table.insertRow();
                row.setAttribute("id", `item${json.flights[i].flightID}`);
                row.insertCell(0).innerHTML = json.flights[i].name;
                row.insertCell(1).innerHTML = source.value;
                row.insertCell(2).innerHTML = destination.value;
                row.insertCell(3).innerHTML = json.flights[i].price;
                row.insertCell(4).innerHTML = `<button type="button" id="btnBook${json.flights[i].flightID}"><a href="BookFlight.html?id=${json.flights[i].flightID}">Book</a></button>`
            }
        } else if (document.getElementById("txtSearch").value == json.flights[i].name) {
            var row = table.insertRow();
            row.setAttribute("id", `item${json.flights[i].flightID}`);
            row.insertCell(0).innerHTML = json.flights[i].name;
            row.insertCell(1).innerHTML = source_name(json.flights[i].sourceID);
            row.insertCell(2).innerHTML = destination_name(json.flights[i].destinationID);
            row.insertCell(3).innerHTML = json.flights[i].price;
            row.insertCell(4).innerHTML = `<button type="button" id="btnBook${json.flights[i].flightID}"><a href="BookFlight.html?id=${json.flights[i].flightID}>Book</a></button>`
        }
    }
}

function source_id(s){
    for (let i = 0; i < json.sources.length; i++) {
        if(s == json.sources[i].name){
            return json.sources[i].id;
        }
    }
}

function destination_id(s){
    for (let i = 0; i < json.destinations.length; i++) {
        if(s == json.destinations[i].name){
            return json.destinations[i].id;
        }
    }
}

function source_name(id){
    for (let i = 0; i < json.sources.length; i++) {
        if(id == json.sources[i].id){
            return json.sources[i].name;
        }
    }
}

function destination_name(id){
    for (let i = 0; i < json.destinations.length; i++) {
        if(id == json.destinations[i].id){
            return json.destinations[i].name;
        }
    }
}
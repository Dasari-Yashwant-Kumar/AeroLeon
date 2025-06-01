let airportData = {};

const airport = async () => {
    let response = await fetch("./airports.json");
    airportData = await response.json();
}

airport();

const filterAirport = (input) => {
    let result = [];
    let inputintolower = input.toLowerCase();

    for (const code in airportData) {
        const airport = airportData[code];
        const name = airport.name && airport.name.toLowerCase() || "";
        const city = airport.municipality && airport.municipality.toLowerCase() || "";
        const country = airport.iso_country && airport.iso_country.toLowerCase() || "";

        if (name.includes(inputintolower) || city.includes(inputintolower) || country.includes(inputintolower)) {
            result.push(`${airport.name}-(${airport.iata_code}) (${airport.municipality}, ${airport.iso_country})`)
        }
    }

    return result;
}

function showResult(result, inputElement) {
    let resultEl = inputElement.closest(".input-wrapper").querySelector(".result");
    resultEl.innerHTML = "";

    if (result.length === 0) {
        result.innerHTML = "<li>No Result Found</li>";
        return;
    }

    result.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;

        li.addEventListener("click", () => {
            inputElement.value = item;
            inputElement.dataset.iata = item.iata_code;
            resultEl.innerHTML = "";
        })


        resultEl.appendChild(li);


    })
}



const fromInput = document.getElementById("from");
const fromInputData = fromInput.value;
const toInput = document.getElementById("to");
const toInputData = toInput.value;



const handleInput = (event) => {
    const input = event.target
    const value = input.value.trim();
    if (value.length > 1) {
        const filtered = filterAirport(value);
        showResult(filtered.slice(0, 10), input)
    } else {
        showResult([], input);
    }
}

fromInput.addEventListener("input", handleInput);
toInput.addEventListener("input", handleInput);

const seats = document.querySelector("#seats");

const seatCount = () => {
    const value = seats.value.trim();

    if (value == "") {
        return
    }
    const totalSeats = Number(value);
    if (totalSeats > 10) {
        alert("The maximum member allowed are 10");
        seats.value = "";
    } else if (totalSeats === 0) {
        alert("Select atleast 1 seat");
        seats.value = "";
    }

}

seats.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        seatCount();
        seats.blur();
    }

}
)

seats.addEventListener("blur", () => {
    seatCount();
});

const search = document.querySelector(".search");
const flightSection = document.querySelector(".flight-section");
const bottom = document.querySelector(".bottom");


search.addEventListener("click", () => {
    const departure = document.querySelector("#departure").value;
    const returnBack = document.querySelector("#return").value;
    const count = document.querySelector("#seats").value;
    const fromIata = fromInput.dataset.iata;
    const toIata = toInput.dataset.iata;
    if (fromInput.value !== "" && toInput.value !== "" && seats.value !== "" && departure.value !== "" && returnBack.value !== "") {
        flightSection.classList.toggle("selected");
        bottom.classList.toggle("chosen");
        flightSection.scrollIntoView({ behavior: "smooth", block: "center" });
        const oneWayFlight = async () => {
            const url = `https://flight-fare-search.p.rapidapi.com/v2/flights/?from=${fromIata}&to=${toIata}&adult=${count}&type=economy&currency=INR`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '8f3a781167mshdd9ba43099423c2p1baa46jsn1ada101d4454',
                    'x-rapidapi-host': 'flight-fare-search.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }

        }

        console.log(oneWayFlight());

    } else {
        alert("Enter all the information");
    }

})






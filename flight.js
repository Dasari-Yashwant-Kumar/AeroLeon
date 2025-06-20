require('dotenv').config();
let airportData = {};

const airport = async () => {
    let response = await fetch("./airports.json");
    airportData = await response.json();
};

airport();

const filterAirport = (input) => {
    let result = [];
    let inputintolower = input.toLowerCase();

    for (const code in airportData) {
        const airport = airportData[code];
        const name = airport.name?.toLowerCase() || "";
        const city = airport.municipality?.toLowerCase() || "";
        const country = airport.iso_country?.toLowerCase() || "";

        if (
            name.includes(inputintolower) ||
            city.includes(inputintolower) ||
            country.includes(inputintolower)
        ) {
            result.push({
                display: `${airport.name} - (${airport.iata_code}) (${airport.municipality}, ${airport.iso_country})`,
                iata_code: airport.iata_code,
            });
        }
    }

    return result;
};

function showResult(result, inputElement) {
    let resultEl = inputElement.closest(".input-wrapper").querySelector(".result");
    resultEl.innerHTML = "";

    if (result.length === 0) {
        resultEl.innerHTML = "<li>No Result Found</li>";
        return;
    }

    result.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item.display;

        li.addEventListener("click", () => {
            inputElement.value = item.display;
            inputElement.dataset.iata = item.iata_code;
            resultEl.innerHTML = "";
        });

        resultEl.appendChild(li);
    });
}

const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");

const handleInput = (event) => {
    const input = event.target;
    const value = input.value.trim();
    if (value.length > 1) {
        const filtered = filterAirport(value);
        showResult(filtered.slice(0, 10), input);
    } else {
        showResult([], input);
    }
};

fromInput.addEventListener("input", handleInput);
toInput.addEventListener("input", handleInput);


const seats = document.querySelector("#seats");

const seatCount = () => {
    const value = seats.value.trim();

    if (value === "") return;

    const totalSeats = Number(value);
    if (totalSeats > 10) {
        alert("The maximum member allowed are 10");
        seats.value = "";
    } else if (totalSeats === 0) {
        alert("Select at least 1 seat");
        seats.value = "";
    }
};

seats.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        seatCount();
        seats.blur();
    }
});
seats.addEventListener("blur", seatCount());

const oneWayTrip = document.querySelector(".one-way");
const hrChosen = document.querySelector(".hr-choosen");
const roundTrip = document.querySelector(".round-trip");
roundTrip.style.cursor = "pointer"
const hrSelected = document.querySelector(".hr-selected");
const oneWay = document.querySelector("#departure");
oneWayTrip.style.cursor = "pointer"
const returnSection = document.querySelector("#return-section");
const searchFlight = document.querySelector(".search-flight");
let tripType = "round";

oneWayTrip.addEventListener("click", () => {
    hrChosen.style.display = "block";
    hrSelected.style.display = "none";
    returnSection.style.display = "none";
    searchFlight.classList.add("active");

    tripType = "one-way";

})

roundTrip.addEventListener("click", () => {
    hrChosen.style.display = "none";
    hrSelected.style.display = "block";
    returnSection.style.display = "block";
    searchFlight.classList.remove("active");
    tripType = "round";
})

// Search logic
const search = document.querySelector(".search button");
const flightSection = document.querySelector(".flight-section");
const bottom = document.querySelector(".bottom");

search.addEventListener("click", () => {
    const departure = document.querySelector("#departure").value;
    const returnBack = document.querySelector("#return").value;
    const count = document.querySelector("#seats").value;
    const fromIata = fromInput.dataset.iata;
    const toIata = toInput.dataset.iata;
    const trip = tripType;

    if (
        !fromIata ||
        !toIata ||
        !departure ||
        !count ||
        (trip === "round" && !returnBack)
    ) {
        alert("Enter all the information");
        return;
    }

    flightSection.classList.add("selected");
    bottom.classList.add("chosen");
    flightSection.scrollIntoView({ behavior: "smooth", block: "center" });

    const fetchFlights = async () => {
        const flights = document.querySelector(".flights");
        flights.innerHTML = "<p>Loading flights...</p>";

        let url = `https://aeroleon.onrender.com/api/flights?from=${fromIata}&to=${toIata}&departureDate=${departure}&adults=${count}&tripType=${trip}&nonStop=false&max=250`;

        if (trip === "round") {
            url += `&returnDate=${returnBack}`;
        }

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log("API result:", result);
            console.log("tripType:", tripType);
            console.log("returnBack:", returnBack);
            console.log("URL:", url);




            const flightData = result.data || [];
            const dictionaries = result.dictionaries || {};

            if (flightData.length === 0) {
                flights.innerHTML = "<p>No flights found.</p>";
                return;
            }

            flights.innerHTML = "";

           flightData.forEach((flight) => {
                const flightDetails = document.createElement("div");
                flightDetails.classList.add("flight-details");

                const segments = flight.itineraries[0].segments;
                const stoppingPlaces = segments.slice(0, -1).map(seg => seg.arrival.iataCode);

                const departureCity = segments[0].departure.iataCode;
                const arrivalCity = segments[segments.length - 1].arrival.iataCode;
                const duration = flight.itineraries[0].duration;
                const stops = segments.length - 1;
                const aircraftCode = segments[0].aircraft?.code;
                const carrierCode = segments[0].carrierCode;
                const airCraftName = dictionaries.carriers?.[carrierCode] || carrierCode;

                let segments1 = flight.itineraries[1]?.segments || [];

                let departureCity1 = "";
                let arrivalCity1 = "";
                let duration1 = "";
                let stops1 = 0;
                let aircraftCode1 = "";
                let carrierCode1 = "";
                let airCraftName1 = "";
                let formattedDepartureTime1 = "";
                let formattedArrivalTime1 = "";
                let stoppingPlaces1 = [];

                if (segments1.length > 0) {
                    departureCity1 = segments1[0].departure.iataCode;
                    arrivalCity1 = segments1[segments1.length - 1].arrival.iataCode;
                    duration1 = flight.itineraries[1].duration;
                    stops1 = segments1.length - 1;
                    aircraftCode1 = segments1[0].aircraft?.code;
                    carrierCode1 = segments1[0].carrierCode;
                    airCraftName1 = dictionaries.carriers?.[carrierCode1] || carrierCode1;
                    formattedDepartureTime1 = formatTime(segments1[0].departure.at);
                    formattedArrivalTime1 = formatTime(segments1[segments1.length - 1].arrival.at);
                    stoppingPlaces1 = segments1.slice(0, -1).map(seg => seg.arrival.iataCode);
                }

                const basePrice = flight.price.base;
                const basePriceInRupee = (parseFloat(basePrice * 86)).toFixed(2);
                const totalPrice = flight.price.grandTotal;
                const totalPriceInRupee = (parseFloat(totalPrice * 86)).toFixed(2);

                function formatTime(dateTime) {
                    if (!dateTime || !dateTime.includes("T")) return "Invalid Time";
                    const timePart = dateTime.split("T")[1];
                    const [hour, minute] = timePart.split(":");
                    const hourNum = parseInt(hour);
                    const ampm = hourNum >= 12 ? "PM" : "AM";
                    const formattedHour = hourNum % 12 || 12;
                    return `${formattedHour}:${minute} ${ampm}`;
                }

                const formattedDepartureTime = formatTime(segments[0].departure.at);
                const formattedArrivalTime = formatTime(segments[segments.length - 1].arrival.at);
                const formattedDuration = duration.slice(2);
                const formattedDuration1 = duration1.slice(2);

                const optionsHolder = document.createElement("div");
                optionsHolder.classList.add("optionsHolder");

                let info = "";
                if (trip === "round" && segments1.length > 0) {
                    info = `
                <div class="option">
                    <div class="company"><h2>${airCraftName} (${aircraftCode})</h2></div>
                        <div class="from-to">
                           <div class="departure-time-place">
                           <div class="timeOfDeparture"><h2>${formattedDepartureTime}</h2></div>
                           <div class="startingPlace"><h2>${departureCity}</h2></div>
                        </div>
                        <div class="hour-stop">
                           <div class="totalTime"><p>${formattedDuration}</p></div>
                           <div class="arrow-icon"><hr><i class="fa-solid fa-plane"></i></div>
                           <div class="stop"><p>${stops ? `${stops} stop${stops > 1 ? 's' : ''} : ${stoppingPlaces.join(", ")}` : "Non-stop"}</p></div>
                        </div>
                        <div class="arrival-time-place">
                           <div class="arrivalTime"><h2>${formattedArrivalTime}</h2></div>
                           <div class="arrivalPlace"><h2>${arrivalCity}</h2></div>
                        </div>
                    </div>
                </div>
                 <div class="option1">
                    <div class="company"><h2>${airCraftName1} (${aircraftCode1})</h2></div>
                        <div class="from-to">
                           <div class="departure-time-place">
                           <div class="timeOfDeparture"><h2>${formattedDepartureTime1}</h2></div>
                           <div class="startingPlace"><h2>${departureCity1}</h2></div>
                        </div>
                        <div class="hour-stop">
                           <div class="totalTime"><p>${formattedDuration1}</p></div>
                           <div class="arrow-icon"><hr><i class="fa-solid fa-plane"></i></div>
                           <div class="stop"><p>${stops1 ? `${stops1} stop${stops1 > 1 ? 's' : ''} : ${stoppingPlaces1.join(", ")}` : "Non-stop"}</p></div>
                        </div>
                        <div class="arrival-time-place">
                           <div class="arrivalTime"><h2>${formattedArrivalTime1}</h2></div>
                           <div class="arrivalPlace"><h2>${arrivalCity1}</h2></div>
                        </div>
                    </div>
                </div>`

                } else {
                    info = `
                    <div class="company"><h2>${airCraftName} (${aircraftCode})</h2></div>
                        <div class="from-to">
                           <div class="departure-time-place">
                           <div class="timeOfDeparture"><h2>${formatTime(segments[0].departure.at)}</h2></div>
                           <div class="startingPlace"><h2>${departureCity}</h2></div>
                        </div>
                        <div class="hour-stop">
                           <div class="totalTime"><p>${duration.slice(2)}</p></div>
                           <div class="arrow-icon"><hr><i class="fa-solid fa-plane"></i></div>
                           <div class="stop"><p>${stops ? `${stops} stop${stops > 1 ? 's' : ''} : ${stoppingPlaces.join(", ")}` : "Non-stop"}</p></div>
                        </div>
                        <div class="arrival-time-place">
                           <div class="arrivalTime"><h2>${formatTime(segments.at(-1).arrival.at)}</h2></div>
                           <div class="arrivalPlace"><h2>${arrivalCity}</h2></div>
                        </div>
                    </div>`

                }



                const book = document.createElement("div");
                book.className = "book";
                const button = document.createElement("button");
                button.className = "bookBtn";
                button.textContent = `Rs. ${basePriceInRupee} book`;
                book.appendChild(button);

                const date = document.querySelector("#departure").value;
                const noOfPerson = document.querySelector("#seats").value;
                const date1 = document.querySelector("#return").value


                button.addEventListener("click", async () => {
                    localStorage.setItem("departureCity", JSON.stringify(departureCity));
                    localStorage.setItem("arrivalCity", JSON.stringify(arrivalCity));
                    localStorage.setItem("formattedDepartureTime", JSON.stringify(formattedDepartureTime));
                    localStorage.setItem("formattedArrivalTime", JSON.stringify(formattedArrivalTime));
                    localStorage.setItem("airCraftName", JSON.stringify(airCraftName));
                    localStorage.setItem("duration", JSON.stringify(duration));
                    localStorage.setItem("stops", JSON.stringify(stops));
                    localStorage.setItem("date", JSON.stringify(date));
                    localStorage.setItem("basePriceInRupee", JSON.stringify(basePriceInRupee));
                    localStorage.setItem("totalPriceInRupee", JSON.stringify(totalPriceInRupee));
                    localStorage.setItem("noOfPerson", JSON.stringify(noOfPerson));

                    localStorage.setItem("departureCity1", JSON.stringify(departureCity1));
                    localStorage.setItem("arrivalCity1", JSON.stringify(arrivalCity1));
                    localStorage.setItem("formattedDepartureTime1", JSON.stringify(formattedDepartureTime1));
                    localStorage.setItem("formattedArrivalTime1", JSON.stringify(formattedArrivalTime1));
                    localStorage.setItem("airCraftName1", JSON.stringify(airCraftName1));
                    localStorage.setItem("duration1", JSON.stringify(duration1));
                    localStorage.setItem("stops1", JSON.stringify(stops1));
                    localStorage.setItem("date1", JSON.stringify(date1));
                    localStorage.setItem("trip", trip);

                    setTimeout(() => {
                        window.location.href = "checkout.html"
                    }, 100)

                })
                if (trip === "round") {
                    optionsHolder.innerHTML = info;
                    flightDetails.append(optionsHolder, book);
                    flights.appendChild(flightDetails);

                } else {
                    flightDetails.innerHTML = info;
                    flightDetails.appendChild(book);
                    flightDetails.style.height = "150px";
                    flights.appendChild(flightDetails);


                }




            });
        } catch (error) {
            console.error("Failed to fetch flights:", error);
            flights.innerHTML = "<p>Something went wrong. Please try again later.</p>";
        }
    };

    fetchFlights();


});



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

// Seat validation
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
seats.addEventListener("blur", seatCount);

// Toggle return date visibility
const oneWayRadio = document.querySelector('input[value="oneway"]');
const roundTripRadio = document.querySelector('input[value="round"]');
const returnSection = document.getElementById("return-section");

function toggleReturnDate() {
    if (roundTripRadio.checked) {
        returnSection.style.display = "block";
    } else {
        returnSection.style.display = "none";
    }
}

oneWayRadio.addEventListener("change", toggleReturnDate);
roundTripRadio.addEventListener("change", toggleReturnDate);

// Set initial state
toggleReturnDate();

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
    const trip = document.querySelector('input[name="trip"]:checked')?.value || "oneway";

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

        let url = `http://localhost:5000/api/flights?from=${fromIata}&to=${toIata}&departureDate=${departure}&adults=${count}&tripType=${trip}&nonStop=false&max=250`;
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
                const stoppingPlaces = [];
                segments.slice(0,-1).forEach((seg)=>{
                    stoppingPlaces.push(seg.arrival.iataCode);
                })
                const departureCity = segments[0].departure.iataCode;
                const arrivalCity = segments[segments.length - 1].arrival.iataCode;
                const duration = flight.itineraries[0].duration;;
                const stops = segments.length - 1;
                const aircraftCode = segments[0].aircraft?.code;
                const carrierCode = segments[0].operating.carrierCode;
                const airCraftName = dictionaries.carriers?.[carrierCode] || carrierCode;

                const basePrice = flight.price.base;
                const basePriceInRupee = (parseFloat(basePrice*86)).toFixed(2);
                const totalPrice = flight.price.total;
                const totalPriceInRupee = (parseFloat(totalPrice*86).toFixed(2));
                const currency = "Rs.";
    
                const taxes = (parseFloat(totalPrice) - parseFloat(basePrice)).toFixed(2);

                function formatTime(dateTime) {
                    if (!dateTime || !dateTime.includes("T")) return "Invalid Time";
                    const timePart = dateTime.split("T")[1];
                    const [hour, minute] = timePart.split(":");
                    const hourNum = parseInt(hour);
                    const ampm = hourNum >= 12 ? "PM" : "AM";
                    const formattedHour = hourNum % 12 || 12;
                    return `${formattedHour}:${minute} ${ampm}`;
                }

                const formattedDuration = duration.slice(2);

                const formattedDepartureTime = formatTime(segments[0].departure.at);
                const formattedArrivalTime = formatTime(segments[segments.length - 1].arrival.at);

                const company = document.createElement("div");
                company.classList.add("company");

                const flightName = document.createElement("h2");
                flightName.textContent = `${airCraftName} (${aircraftCode})`;

                company.appendChild(flightName);

                const fromTo = document.createElement("div");
                fromTo.classList.add("from-to");

                const timePlace = document.createElement("div");
                timePlace.classList.add("departure-time-place");

                const timeOfDeparture = document.createElement("div");
                timeOfDeparture.classList.add("timeOfDeparture");

                const departureHeading = document.createElement("h2");
                departureHeading.textContent = `${formattedDepartureTime}`;

                timeOfDeparture.appendChild(departureHeading);
                timePlace.appendChild(timeOfDeparture);

                const startingPlace = document.createElement("div");
                startingPlace.classList.add("startingPlace");

                const placeHeader = document.createElement("h2");
                placeHeader.textContent = `${departureCity}`;

                startingPlace.appendChild(placeHeader);
                timePlace.appendChild(startingPlace);

                fromTo.appendChild(timePlace);

                const hourStop = document.createElement("div");
                hourStop.classList.add("hour-stop");

                const totalTime = document.createElement("div");
                totalTime.classList.add("totalTime");

                const totalTimePara = document.createElement("p");
                totalTimePara.textContent = `${formattedDuration}`;

                totalTime.appendChild(totalTimePara);
                hourStop.appendChild(totalTime);

                const arrowIcon = document.createElement("div");
                arrowIcon.classList.add("arrow-icon");

                const hr = document.createElement("hr");

                const icon = document.createElement("i");
                icon.classList.add("fa-solid", "fa-plane");

                arrowIcon.appendChild(hr);
                arrowIcon.appendChild(icon);
                hourStop.appendChild(arrowIcon);

                const noOfStops = document.createElement("div");
                noOfStops.classList.add("stop");


                const noOfStopsPara = document.createElement("p");
                
                    if(stops>0){
                      noOfStopsPara.textContent = `${stops} stop${stop>1 ? "s":""} : ${stoppingPlaces.join(", ")}`
                    } else{
                        noOfStopsPara.textContent= "Non-stop"
                    }
                
    

                noOfStops.appendChild(noOfStopsPara);
                hourStop.appendChild(noOfStops);

                fromTo.appendChild(hourStop);

                const arrivalTimePlace = document.createElement("div");
                arrivalTimePlace.classList.add("arrival-time-place");

                const arrivalTime = document.createElement("div");
                arrivalTime.classList.add("arrivalTime");

                const arrivalTimeHeader = document.createElement("h2");
                arrivalTimeHeader.textContent = `${formattedArrivalTime}`;

                arrivalTime.appendChild(arrivalTimeHeader);
                arrivalTimePlace.appendChild(arrivalTime);

                const arrivalPlace = document.createElement("div");
                arrivalPlace.classList.add("arrivalPlace");

                const arrivalPlaceHeader = document.createElement("h2");
                arrivalPlaceHeader.textContent = `${arrivalCity}`;

                arrivalPlace.appendChild(arrivalPlaceHeader);
                arrivalTimePlace.appendChild(arrivalPlace);

                fromTo.appendChild(arrivalTimePlace);

                const book = document.createElement("div");
                book.classList.add("book");

                const button = document.createElement("button");
                button.textContent = "book";

                const pricePara = document.createElement("p");
                pricePara.classList.add("price");
                pricePara.textContent = `${currency} ${basePriceInRupee}`;

                book.appendChild(pricePara);
                book.appendChild(button);


                flightDetails.append(company, fromTo, book);

                flights.appendChild(flightDetails);
                
            });
        } catch (error) {
            console.error("Failed to fetch flights:", error);
            flights.innerHTML = "<p>Something went wrong. Please try again later.</p>";
        }
    };

    fetchFlights();
});

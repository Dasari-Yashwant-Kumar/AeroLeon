let airportData = {};

const airport = async () => {
    let response = await fetch("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json");
    airportData = await response.json();
}

airport();

const filterAirport = (input) => {
    let result = [];
    let inputintolower = input.toLowerCase();

    for (const code in airportData) {
        const airport = airportData[code];
        const name = airport.name && airport.name.toLowerCase() || "";
        const city = airport.city && airport.city.toLowerCase() || "";
        const country = airport.country && airport.country.toLowerCase() || "";

        if (name.includes(inputintolower) || city.includes(inputintolower) || country.includes(inputintolower)) {
            result.push(`${airport.name} (${airport.city}, ${airport.country})`)
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
            resultEl.innerHTML = "";
        })


        resultEl.appendChild(li);


    })
}

const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");



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
const departure = document.querySelector("#departure");
const returnBack = document.querySelector("#return");

search.addEventListener("click", ()=>{
    if(fromInput.value !== "" && toInput.value !== "" && seats.value !== "" && departure.value !== "" && returnBack.value !== ""){
        flightSection.classList.toggle("selected");
    bottom.classList.toggle("chosen");
    flightSection.scrollIntoView({behavior: "smooth", block: "center"})
    } else{
        alert("Enter all the information");
    }


    
})





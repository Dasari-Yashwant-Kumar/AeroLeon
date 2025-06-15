document.addEventListener("DOMContentLoaded", () => {
    const departureCity = JSON.parse(localStorage.getItem("departureCity"));
    const arrivalCity = JSON.parse(localStorage.getItem("arrivalCity"));
    const formattedDepartureTime = JSON.parse(localStorage.getItem("formattedDepartureTime"));
    const formattedArrivalTime = JSON.parse(localStorage.getItem("formattedArrivalTime"));
    const airCraftName = JSON.parse(localStorage.getItem("airCraftName"));
    const duration = JSON.parse(localStorage.getItem("duration"));
    const formattedDuration = duration.slice(2);
    const stops = JSON.parse(localStorage.getItem("stops"));
    const date = JSON.parse(localStorage.getItem("date"));
    const basePrice = JSON.parse(localStorage.getItem("basePriceInRupee"));
    const totalPrice = JSON.parse(localStorage.getItem("totalPriceInRupee"));
    const taxes = (parseFloat(totalPrice - basePrice)).toFixed(2);
    const currency = "Rs.";
    const noOfPerson = JSON.parse(localStorage.getItem("noOfPerson"));
    const trip = localStorage.getItem("trip");

    const travelerAmount = document.querySelector(".traveler-amount p");
    const basicPrice = document.querySelector(".basic-price");
    const taxAmount = document.querySelector(".tax-amount");
    const tripTotal = document.querySelector(".trip-total p");
    const travelerInfo = document.querySelector(".traveler-info");
    const flightInfo = document.querySelector(".flight-info");
    const basicFlight = document.querySelector(".basic-flight");

    const durationandstops = () => {
        if (stops > 0) {
            return `${formattedDepartureTime} - ${formattedArrivalTime} (${formattedDuration}, ${stops} Stop${stops > 1 ? "s" : ""})`
        } else {
            return `${formattedDepartureTime} - ${formattedArrivalTime} (${formattedDuration}, Non-stop)`
        }
    };

    const updatedDate = (date) => {
        const dateObj = new Date(date);
        const option = { day: "2-digit", month: "short", year: "numeric" };
        const formattedDate = new Intl.DateTimeFormat("en-GB", option).format(dateObj);

        return formattedDate;
    }

    const updatedDay = (date) => {
        const dateObj = new Date(date);
        const weekDay = new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(dateObj);
        return weekDay;
    }

    travelerAmount.textContent = `${currency} ${totalPrice}`;
    basicPrice.textContent = `${currency} ${basePrice}`;
    taxAmount.textContent = `${currency} ${taxes}`;
    tripTotal.textContent = `${currency} ${totalPrice}`;

    const travelerPerson = document.createElement("h2");
    travelerPerson.classList.add("travelercount");
    if (noOfPerson > 1) {
        travelerPerson.textContent = `Travelers : ${noOfPerson} `;
    } else {
        travelerPerson.textContent = `Traveler : ${noOfPerson} `;
    }

    travelerInfo.appendChild(travelerPerson);

    const roundFlights = document.createElement("div");
    roundFlights.classList.add("roundFlights");

    let flightDetails = ""

    if (trip === "round") {

        const departureCity1 = JSON.parse(localStorage.getItem("departureCity1"));
        const arrivalCity1 = JSON.parse(localStorage.getItem("arrivalCity1"));
        const formattedDepartureTime1 = JSON.parse(localStorage.getItem("formattedDepartureTime1"));
        const formattedArrivalTime1 = JSON.parse(localStorage.getItem("formattedArrivalTime1"));
        const airCraftName1 = JSON.parse(localStorage.getItem("airCraftName1"));
        const duration1 = JSON.parse(localStorage.getItem("duration1"));
        const formattedDuration1 = duration1.slice(2);
        const stops1 = JSON.parse(localStorage.getItem("stops1"));
        const date1 = JSON.parse(localStorage.getItem("date1"));
        const priceSummary = document.querySelector(".price-summary");
        const hr = document.querySelector("hr");

          const durationandstops1 = () => {
        if (stops > 0) {
            return `${formattedDepartureTime1} - ${formattedArrivalTime1} (${formattedDuration1}, ${stops1} Stop${stops1 > 1 ? "s" : ""})`
        } else {
            return `${formattedDepartureTime1} - ${formattedArrivalTime1} (${formattedDuration1}, Non-stop)`
        }
    };


        flightDetails =
            `<div class="roundOne">
                <div class="flight-heading">
                    <h2>Flight Details: Round Trip</h2>
                </div>
                <div class="flight-location">
                    <p class="fromTo">${departureCity} to ${arrivalCity}</p>
                    <p class="durationstops">${durationandstops()}</p>
                </div>

                <div class="date-day">
                    <p class="craftName">${airCraftName}</p>
                    <i class="fa-solid fa-circle-dot"></i>
                    <p class="day">${updatedDay(date)}</p>  
                    <i class="fa-solid fa-circle-dot"></i>
                    <p class="dateOfJourney">${updatedDate(date)}</p>
                </div>
            </div>
            <div class="roundTwo">
                <div class="flight-heading">
                    <h2>Return Flight</h2>
                </div>
                <div class="flight-location">
                    <p class="fromTo">${departureCity1} to ${arrivalCity1}</p>
                    <p class="durationstops">${durationandstops1()}</p>
                </div>

                <div class="date-day">
                    <p class="craftName">${airCraftName1}</p>
                    <i class="fa-solid fa-circle-dot"></i>
                    <p class="day">${updatedDay(date1)}</p>  
                    <i class="fa-solid fa-circle-dot"></i>
                    <p class="dateOfJourney">${updatedDate(date1)}</p>
                </div>
            </div>`

            priceSummary.classList.add("activated");
            hr.classList.add("chosen");
    } else {
        flightDetails =
            `<div class="OneWay">
                <div class="flight-heading">
                    <h2>Flight Details: One Way Trip</h2>
                </div>
                <div class="flight-location">
                    <p class="fromTo">${departureCity} to ${arrivalCity}</p>
                    <p class="durationstops">${durationandstops()}</p>
                </div>

                <div class="date-day">
                    <p class="craftName">${airCraftName}</p>
                    <i class="fa-solid fa-circle-dot"></i>
                    <p class="day">${updatedDay(date)}</p>  
                    <i class="fa-solid fa-circle-dot"></i>
                    <p class="dateOfJourney">${updatedDate(date)}</p>
                </div>
            </div>`
    };


    roundFlights.innerHTML = flightDetails;
    basicFlight.append(roundFlights);
    flightInfo.append(basicFlight);


})
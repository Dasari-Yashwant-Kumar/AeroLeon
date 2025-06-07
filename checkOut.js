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

    const fromTo = document.querySelector(".fromTo");
    const durationandstops = document.querySelector(".durationstops");
    const craftName = document.querySelector(".craftName");
    const dateOfJourney = document.querySelector(".dateOfJourney");
    const travelerAmount = document.querySelector(".traveler-amount p");
    const basicPrice = document.querySelector(".basic-price");
    const taxAmount = document.querySelector(".tax-amount");
    const tripTotal = document.querySelector(".trip-total p");
    const travelerInfo = document.querySelector(".traveler-info");
    const day = document.querySelector(".day");

    fromTo.textContent = `${departureCity} to ${arrivalCity}`;

    if (stops > 0) {
        durationandstops.textContent = `${formattedDepartureTime} - ${formattedArrivalTime} (${formattedDuration}, ${stops} Stop${stops > 1 ? "s" : ""})`
    } else {
        durationandstops.textContent = `${formattedDepartureTime} - ${formattedArrivalTime} (${formattedDuration}, Non-stop)`
    }

    craftName.textContent = `${airCraftName}`;

    const updatedDate= (date)=>{
        const dateObj = new Date(date);
        const option = {day: "2-digit", month: "short", year: "numeric"};
        const formattedDate = new Intl.DateTimeFormat("en-GB", option).format(dateObj);
        
        return formattedDate;
    }

    const updatedDay = (date) =>{
        const dateObj = new Date(date);
        const weekDay = new Intl.DateTimeFormat("en-GB", {weekday: "short"}).format(dateObj);
        return weekDay;
    }

    day.textContent = `${updatedDay(date)}`;
    dateOfJourney.textContent = `${updatedDate(date)}`;
    travelerAmount.textContent = `${currency} ${totalPrice}`;
    basicPrice.textContent = `${currency} ${basePrice}`;
    taxAmount.textContent = `${currency} ${taxes}`;
    tripTotal.textContent = `${currency} ${totalPrice}`;

    const travelerPerson = document.createElement("h2");
            travelerPerson.classList.add("travelercount");
            if (noOfPerson > 1){
                travelerPerson.textContent = `Travelers : ${noOfPerson} `;
            }else{
                travelerPerson.textContent = `Traveler : ${noOfPerson} `;
            }
            
            travelerInfo.appendChild(travelerPerson);


})
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
    const totalPrice = JSON.parse(localStorage.getItem("basePriceInRupee"));
    const taxes = (parseFloat(basePrice - totalPrice)).toFixed(2);
    const currency = "Rs."

    console.log("departureCity:", localStorage.getItem("departureCity"));
console.log("arrivalCity:", localStorage.getItem("arrivalCity"));
console.log("date:", localStorage.getItem("date"));

                    console.log(basePrice);
                    console.log(totalPrice);
                   


    const fromTo = document.querySelector(".fromTo");
    const durationandstops = document.querySelector(".durationstops");
    const craftName = document.querySelector(".craftName");
    const dateOfJourney = document.querySelector(".dateOfJourney");
    const travelerAmount = document.querySelector(".traveler-amount p");
    const basicPrice = document.querySelector(".basic-price");
    const taxAmount = document.querySelector(".tax-amount");
    const tripTotal = document.querySelector(".trip-total p");

    fromTo.textContent = `${departureCity} to ${arrivalCity}`;

    if(stops>0){
         durationandstops.textContent = `${formattedDepartureTime} - ${formattedArrivalTime} (${formattedDuration}, ${stops} Stop${stops>1? "s": ""})`
    } else{
        durationandstops.textContent = `${formattedDepartureTime} - ${formattedArrivalTime} (${formattedDuration}, Non-stop)`
    }
   
    craftName.textContent = `${airCraftName}`;
    dateOfJourney.textContent = `${date}`;
    travelerAmount.textContent = `${currency} ${totalPrice}`;
    basicPrice.textContent = `${currency} ${basePrice}`;
    taxAmount.textContent = `${currency} ${taxes}`;
    tripTotal.textContent = `${currency} ${totalPrice}`
})
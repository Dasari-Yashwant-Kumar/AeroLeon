const departureCity = JSON.parse(localStorage.getItem("departureCity"));
const arrivalCity = JSON.parse(localStorage.getItem("arrivalCity"));
const formattedDepartureTime = JSON.parse(localStorage.getItem("formattedDepartureTime"));
const formattedArrivalTime = JSON.parse(localStorage.getItem("formattedArrivalTime"));
const airCraftName = JSON.parse(localStorage.getItem("airCraftName"));
const duration = JSON.parse(localStorage.getItem("duration"));
const stops = JSON.parse(localStorage.getItem("stops"));
const date = JSON.parse(localStorage.getItem("date"));

const fromTo = document.querySelector(".fromTo");
const duration$stops = document.querySelector(".duration$stops");
const craftName = document.querySelector(".craftName");
const dateOfJourney = document.querySelector(".dateOfJourney");

fromTo.textContent = `${departureCity} to ${arrivalCity}`;
duration$stops.textContent = `${formattedDepartureTime} - ${formattedArrivalTime}`;
craftName.textContent = `${airCraftName}`;
dateOfDeparture.textContent = `${date}`; 
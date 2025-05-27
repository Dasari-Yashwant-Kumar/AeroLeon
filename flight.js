let airportData = {};

const airport = async ()=>{
    let response = await fetch ("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json");
        airportData = await response.json();
}

airport();

const filterAirport = (input) =>{
    let result = [];
    let inputintolower = input.toLowerCase();

    for (const code in airportData){
        const airport = airportData[code];
        const name = airport.name && airport.name.toLowerCase() || "";
        const city = airport.city && airport.city.toLowerCase() || "";
        const country = airport.country && airport.country.toLowerCase() || "";

        if (name.includes(inputintolower) || city.includes(inputintolower) || country.includes(inputintolower)){
            result.push(`${airport.name} (${airport.city}, ${airport.country})`)
        }
    }

    return result;
}

function showResult(result,inputElement){
    let resultEl = inputElement.closest(".input-wrapper").querySelector(".result");

    resultEl.innerHTML = "";

    if(result.length === 0){
        result.innerHTML = "<li>No Result Found</li>";
        return;
    }

    result.forEach(item=>{
        const li = document.createElement("li");
        li.innerText = item;

        li.addEventListener("click", ()=>{
            inputElement.value = item;
            resultEl.innerHTML = "";
        })


        resultEl.appendChild(li);
        

    })
}

const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");



const handleInput= (event)=>{
    const input = event.target
    const value = input.value.trim();
    if(value.length > 1){
        const filtered = filterAirport(value);
        showResult(filtered.slice(0, 10), input)
    } else {
        showResult([], input);
    }
}

fromInput.addEventListener("input", handleInput);
toInput.addEventListener("input", handleInput);




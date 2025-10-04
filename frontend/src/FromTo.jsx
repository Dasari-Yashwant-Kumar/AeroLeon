import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import {useTrip} from "./tripContext";

const FromTo = ({}) => {
    const [fromSuggestion, setFromSuggestion] = useState([]);
    const [toSuggestion, setToSuggestion] = useState([]);
    const wrapperRef = useRef(null);

    const {from, setFrom, to, setTo, airport, setAirport} = useTrip();

    useEffect(() => {
        const airportName = async () => {
            try {
                const response = await fetch("/airport.json");
                const data = await response.json();
                const airportsArray = Array.isArray(data)
                    ? data
                    : Array.isArray(data?.airports)
                        ? data.airports
                        : Array.isArray(data?.data)
                            ? data.data
                            : [];
                setAirport(airportsArray);

            } catch (error) {
                console.log("No aiport data found", error);
            }
        }
        airportName();

        const handleClickDown = (event) => {

        if(wrapperRef.current && !wrapperRef.current.contains(event.target)){
            setFromSuggestion([]);
        }
        }

        document.addEventListener("mousedown", handleClickDown);
        return () => document.removeEventListener("mousedown", handleClickDown);
        
    }, [])



    const normalize = (value) => (typeof value === "string" ? value.toLowerCase() : "");

    const handleFromChange = (e) => {
        const value = e.target.value;
        setFrom(value);

        if (value.length > 0) {
            const needle = value.toLowerCase();
            const filtered = airport.filter((airport) =>
                normalize(airport.name).includes(needle) ||
                normalize(airport.municipality).includes(needle) ||
                normalize(airport.city).includes(needle) ||
                normalize(airport.code).includes(needle) ||
                normalize(airport.iata).includes(needle) ||
                normalize(airport.airport).includes(needle) ||
                normalize(airport.country).includes(needle)
            );
            setFromSuggestion(filtered);
        } else {
            setFromSuggestion([]);

        }
    }

    const handleToChange = (e) => {
        const value = e.target.value;
        setTo(value);

        if (value.length > 0) {
            const needle = value.toLowerCase();
            const filtered = airport.filter((airport) =>
                normalize(airport.name).includes(needle) ||
            normalize(airport.municipality).includes(needle) ||
                normalize(airport.city).includes(needle) ||
                normalize(airport.code).includes(needle) ||
                normalize(airport.iata).includes(needle) ||
                normalize(airport.airport).includes(needle) ||
                normalize(airport.country).includes(needle)
            );
            setToSuggestion(filtered)
        } else {
            setToSuggestion([]);
        }
    }

    return (
        <div className="flex gap-[1rem] xl:gap-[4rem]">
            <div>
                <label htmlFor="from" className="hidden md:block text-[1rem] xl:text-[2rem]">From</label>
                <div className="relative">
                    <FontAwesomeIcon icon={faPlaneDeparture} className="absolute top-[50%] left-[10px] -translate-y-[50%] text-[#6D99B5] text-[1rem] xl:text-[2rem]" />
                    <input type="text" id="from"placeholder = "From" value={from?.name? `${from.name} (${from.iata})`: from || ""} onChange={handleFromChange} className="w-[25vw] h-[4vh] rounded-[5px] max-w-[18 rem] max-h-[5rem] text-[0.8rem] pl-[2rem] border-2 bg-white md:placeholder-transparent md:w-[10vw] md:rounded-[10px] xl:text-[2rem] xl:pl-[3.5rem]" />
                    <div className="suggestions">

                        {fromSuggestion.length > 0 && (
                            <ul ref = {wrapperRef} className="bg-white border rounded shadow absolute top-[40px] left-0 w-[20vw] max-w-[500px] text-[0.8rem] z-10 max-h-45 overflow-y-auto xl:text-[2rem]">
                                {fromSuggestion.map((airport, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setFrom(airport);
                                            setFromSuggestion([]);
                                        }}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {(airport.name || airport.airport || airport.city || "")} {(airport.code || airport.iata) ? `(${airport.code || airport.iata})` : ""}
                                    </li>
                                ))}

                            </ul>

                        )}

                    </div>
                </div>
            </div>

            <div className="basic-details">
                <label htmlFor="to" className="hidden md:block text-[1rem] xl:text-[2rem]">To</label>
                <div className="relative">
                    <FontAwesomeIcon icon={faPlaneArrival} className="absolute top-[50%] left-[10px] -translate-y-[50%] text-[#6D99B5] text-[1rem] xl:text-[2rem]" />
                    <input type="text" id="to" placeholder = "To" value={to?.name ? `${to.name} (${to.iata})` :to || ""} onChange={handleToChange} className="w-[25vw] h-[4vh] rounded-[5px] max-w-[18 rem] max-h-[5rem] text-[0.8rem] md:placeholder-transparent md:w-[10vw] md:rounded-[10px] pl-[2rem] border-2 bg-white xl:text-[2rem] xl:pl-[3.5rem]" />
                    <div className="suggestions">
                        {toSuggestion.length > 0 && (
                            <ul ref = {wrapperRef} className="bg-white border rounded shadow absolute top-[40px] left-0 w-[20vw] max-w-[500px] text-[0.8rem] z-10 max-h-45 overflow-y-auto xl:text-[2rem]">
                                {toSuggestion.map((airport, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setTo(airport);
                                            setToSuggestion([]);
                                        }}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {(airport.name || airport.airport || airport.city || "")} {(airport.code || airport.iata) ? `(${airport.code || airport.iata})` : ""}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromTo;
import { createContext, useState, useContext } from "react";

const TripContext = createContext();

export const TripProvider = ({ children }) => {
    const [typeOfTrip, setTypeOfTrip] = useState("round");
    const [departureDate, setDeparture] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [seats, setSeats] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [airport, setAirport] = useState("");
    const [selectedFlight, setSelectedFlight] = useState(null);




    return (
        <TripContext.Provider value={{
            typeOfTrip, setTypeOfTrip, departureDate,
            setDeparture, returnDate, setReturnDate, seats, setSeats,
            from, setFrom, to, setTo, airport, setAirport,
            selectedFlight, setSelectedFlight
        }}>
            {children}
        </TripContext.Provider>
    )

}

export const useTrip = () => useContext(TripContext);




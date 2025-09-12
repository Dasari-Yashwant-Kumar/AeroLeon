import { createContext, useState, useContext } from "react";

const TripContext = createContext();

export const TripProvider = ({ children }) => {
    const [typeOfTrip, setTypeOfTrip] = useState("round");
    const [departure, setDeparture] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [seats, setSeats] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [airport, setAirport] = useState("");




    return (
        <TripContext.Provider value={{ typeOfTrip, setTypeOfTrip, departure, setDeparture, returnDate, setReturnDate, seats, setSeats, from, setFrom, to, setTo, airport, setAirport }}>
            {children}
        </TripContext.Provider>
    )

}

export const useTrip = () => useContext(TripContext);




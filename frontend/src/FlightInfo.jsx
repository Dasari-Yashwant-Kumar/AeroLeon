import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useTrip } from "./tripContext";
import Bottom from "./Bottom";
import { Link } from "react-router-dom"


export const FlightInfo = ({ flights }) => {
    const { typeOfTrip, setTypeOfTrip, setSelectedFlight } = useTrip();

    const handleTrip = (trip) => {
        setTypeOfTrip(trip);
    }


    console.log(flights);

    if (!flights || flights.data.length === 0) {
        return (
            <div className="flex justify-center  items-center bg-[#6D99B5] font-bold text-[0.5rem] sm:text-[1rem] ~w-[2100px] h-[350px] mt-[2rem] rounded-[12rem]">
                No Flights Found
            </div>
        );
    }
    const data = flights.data;
    const dictionaries = flights.dictionaries;

    return (
        <div className="w-full">
            {data.map((flight, index) => {
                const segments = flight.itineraries?.[0]?.segments || [];
                const noOfStops = segments.length - 1;
                let layOver = [];
                const departure = segments?.[0]?.departure?.iataCode || [];
                const finalArrival = segments[segments.length - 1]?.arrival?.iataCode;
                layOver = segments.slice(0, -1).map(seg => seg.arrival.iataCode);
                const departureDateTime = segments[0].departure.at;
                const departureSplit = departureDateTime.split("T")[1];
                const departureTime = departureSplit.slice(0, -3);
                const arrivalDateTime = segments[segments.length - 1].arrival.at
                const arrivalSplit = arrivalDateTime.split("T")[1];
                const arrivalTime = arrivalSplit.slice(0, -3);


                const duration = flight.itineraries[0].duration;
                const finalDuration = duration
                    .replace('PT', '')
                    .replace('H', 'h ')
                    .replace('M', 'm')
                    .trim();

                const carrierCode = segments[0].operating.carrierCode;
                const carrierName = dictionaries.carriers[carrierCode];

                const price = flight.price;
                const basePrice = parseFloat(price.base);
                const grandTotal = parseFloat(price.grandTotal);
                const taxes = grandTotal - basePrice;
                const conversion = 83;
                const amountInINR = Math.round(grandTotal * conversion);

                const returnSegment = flight.itineraries?.[1]?.segments || [];
                const returnDeparture = returnSegment?.[0]?.departure?.iataCode;
                const returnArrival = returnSegment[returnSegment.length - 1]?.arrival?.iataCode;
                const returnDuration = flight.itineraries?.[1]?.duration;
                const finalReturnDuration = returnDuration?.replace("PT", "").replace("H", "h ").replace("M", "m").trim();
                const returnCarrierCode = returnSegment?.[0]?.operating?.carrierCode;
                const returnCarrierName = dictionaries?.carriers[returnCarrierCode]
                const returnLayover = returnSegment.slice(0, -1).map(seg => seg.arrival.iataCode);
                const returnNoOfStops = returnSegment.length - 1;
                const returnDepartureDateTime = returnSegment?.[0]?.departure?.at;
                const returnDepartureTime = returnDepartureDateTime?.split("T")[1];
                const finalReturnDepartureTime = returnDepartureTime?.slice(0, -3);
                const returnArrivalDateTime = returnSegment[returnSegment.length - 1]?.arrival?.at;
                const returnArrivalTime = returnArrivalDateTime?.split("T")[1];
                const finalReturnArrivalTime = returnArrivalTime?.slice(0, -3);

                const handleBook = () => {
                    setSelectedFlight({
                        typeOfTrip,
                        departure,
                        finalArrival,
                        departureTime,
                        arrivalTime,
                        finalDuration,
                        carrierName,
                        noOfStops,
                        layOver,
                        basePrice,
                        taxes,
                        amountInINR,
                        returnDeparture,
                        returnArrival,
                        finalReturnDuration,
                        returnCarrierName,
                        finalReturnDepartureTime,
                        finalReturnArrivalTime,
                        returnNoOfStops,
                        returnLayover,
                        from,
                        to

                    })
                }



                return (
                    <div key={index}>
                        <div className="flex justify-center items-center ">
                            <div className="flex flex-column justify-center items-center bg-[#6D99B5] w-[90vw] max-w-[2400px] pt-[40px] pb-[40px] rounded-[5rem] mt-[2rem]">
                                {typeOfTrip === "round" ? (
                                    <div key={index} className="flex flex-col justify-evenly items-center" >
                                        <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[80vw] h-[30vh] sm:h-[35vh] max-w-[2100px] max-h-[650px] font-bold text-[0.5rem] sm:text-[1rem] rounded-[5rem] ">
                                            <div className="flex gap-[15px] justify-center items-center flex-col">
                                                <div className="flex flex-row gap-[25px] items-center ">
                                                    <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[8vh] sm:h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[2rem] rounded-bl-[2rem]">
                                                        <h2>{carrierName} ({carrierCode})</h2>
                                                    </div>
                                                    <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[8vh] sm:h-[12vh] max-w-[1300px] max-h-[220px]">
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="timeOfDeparture">
                                                                <h2>{departureTime}</h2>
                                                            </div>
                                                            <div className="startingPlace">
                                                                <h2>{departure}</h2>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="totalTime">
                                                                <p>{finalDuration}</p>
                                                            </div>
                                                            <div className="flex items-center justify-between w-full">
                                                                <hr className="border-1 border-[#6D99B5]  w-[15vw] max-w-[350px] text-[#6D99B5] sm:border-3" />
                                                                <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" />
                                                            </div>
                                                            <div className="stop">
                                                                <p>{noOfStops === 0 ? "Non-stop" : `${noOfStops} stop${noOfStops > 1 ? "s" : ""} ${layOver.join(", ")}`}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="arrivalTime">
                                                                <h2>{arrivalTime}</h2>
                                                            </div>
                                                            <div className="arrivalPlace">
                                                                <h2>{finalArrival}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row gap-[25px] items-center ">
                                                    <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[8vh] sm:h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[2rem] rounded-bl-[2rem]">
                                                        <h2>{returnCarrierName} ({returnCarrierCode})</h2>
                                                    </div>
                                                    <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[8vh] sm:h-[12vh] max-w-[1300px] max-h-[220px]">
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="timeOfDeparture">
                                                                <h2>{finalReturnDepartureTime}</h2>
                                                            </div>
                                                            <div className="startingPlace">
                                                                <h2>{returnDeparture}</h2>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="totalTime">
                                                                <p>{finalReturnDuration}</p>
                                                            </div>
                                                            <div className="flex items-center justify-between w-full">
                                                                <hr className="border-1 border-[#6D99B5]  w-[15vw] max-w-[350px] text-[#6D99B5] sm:border-3" />
                                                                <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" />
                                                            </div>
                                                            <div className="stop">
                                                                <p>{returnNoOfStops === 0 ? "Non-stop" : `${returnNoOfStops} stop${returnNoOfStops > 1 ? "s" : ""} ${returnLayover.join(", ")}`}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="arrivalTime">
                                                                <h2>{finalReturnArrivalTime}</h2>
                                                            </div>
                                                            <div className="arrivalPlace">
                                                                <h2>{returnArrival}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to="/CheckOut" onClick={handleBook} >
                                                <button className="w-[10vw] h-[10vh] sm:h-[15vh] max-w-[220px] max-h-[220px]  rounded-tr-[2rem] rounded-br-[2rem] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                                    Rs. {amountInINR} Book
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={flight.id} className="flex flex-col gap-[50px] justify-center items-center bg-[#6D99B5]">
                                        <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[80vw] h-[20vh] sm:h-[25vh] max-w-[2100px] max-h-[650px] font-bold text-[0.5rem] sm:text-[1rem] rounded-[5rem] ">
                                            <div className="flex flex-row gap-[25px] items-center mt-[1rem]">
                                                <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[8vh] sm:h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[2rem] rounded-bl-[2rem]">
                                                    <h2>{carrierName} ({carrierCode})</h2>
                                                </div>
                                                <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[8vh] sm:h-[12vh] max-w-[1300px] max-h-[220px]">
                                                    <div className="flex flex-col justify-center items-center">
                                                        <div className="timeOfDeparture">
                                                            <h2>{departureTime}</h2>
                                                        </div>
                                                        <div className="startingPlace">
                                                            <h2>{departure}</h2>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col justify-center items-center">
                                                        <div className="totalTime">
                                                            <p>{finalDuration}</p>
                                                        </div>
                                                        <div className="flex items-center justify-between w-full">
                                                            <hr className="border-1 border-[#6D99B5]  w-[15vw] max-w-[350px] text-[#6D99B5] sm:border-3" />
                                                            <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" />
                                                        </div>

                                                        <div className="stop">
                                                            <p>{noOfStops === 0 ? "Non-stop" : `${noOfStops} stop${noOfStops > 1 ? "s" : ""} ${layOver.join(", ")}`}</p>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-col justify-center items-center">
                                                        <div className="arrivalTime">
                                                            <h2>{arrivalTime}</h2>
                                                        </div>
                                                        <div className="arrivalPlace">
                                                            <h2>{finalArrival}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to="/CheckOut" onClick={handleBook}>
                                                    <button className="w-[10vw] h-[8vh] sm:h-[12vh] max-w-[220px] max-h-[220px]  rounded-tr-[2rem] rounded-br-[2rem] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                                        Rs. {amountInINR} Book
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                );

            })}
            <div className="bg-[#CECCC8] h-[100px]"></div>
            <Bottom />
        </div>

    );

};


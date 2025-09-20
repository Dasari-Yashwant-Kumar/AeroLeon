import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useTrip } from "./tripContext";


export const FlightInfo = ({ flights }) => {
    const { typeOfTrip } = useTrip();

    console.log(flights);

    if (!flights || flights.data.length === 0) {
        return (
            <div className="flex justify-center  items-center bg-[#6D99B5] font-bold text-[40px] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                No Flights Found
            </div>
        );
    }


    const data = flights.data;
    const dictionaries = flights.dictionaries;

    return (
        <div className="bg-[#CECCC8] w-full h-[100vh]">
            {data.map((flight, index) => {
                const segments = flight.itineraries[0].segments;
                const noOfStops = segments.length - 1;
                let layOver = [];
                const departure = segments[0].departure.iataCode;
                const finalArrival = segments[segments.length - 1].arrival.iataCode;
                layOver = segments.slice(0, -1).map(seg => seg.arrival.iataCode);
                const departureDateTime = segments[0].departure.at;
                const departureSplit = departureDateTime.split("T")[1];
                const departureTime = departureSplit.slice(0, -3);
                const finalArrivalTime = segments[segments.length - 1].arrival.at
                // const arrivalDateTime = segments[0].arrival.at;
                const arrivalSplit = finalArrivalTime.split("T")[1];
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

                return (
                    <div key={index} className="flights">
                        <div className="flex justify-center items-center bg-[#CECCC8]">
                            <div className="flex flex-column justify-center items-center bg-[#6D99B5] w-[2400px] pt-[40px] pb-[40px] rounded-[50px] mt-[10rem]  ">
                                {typeOfTrip === "round" ? (
                                    <div key={index} className="flex flex-col justify-evenly items-center" >
                                        <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[2100px] h-[650px] font-bold text-[40px] mt-[2rem] rounded-[120px]">
                                            <div className="flex gap-[20px] justify-center items-center flex-col">
                                                <div className="flex flex-row gap-[25px] items-center mt-[1rem]">
                                                    <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                                        <h2>Aircraft Nam (Code)</h2>
                                                    </div>
                                                    <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="timeOfDeparture">
                                                                <h2>10:00</h2>
                                                            </div>
                                                            <div className="startingPlace">
                                                                <h2>{departure}</h2>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="totalTime">
                                                                <p>2h</p>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <hr />
                                                                <i className="fa-solid fa-plane"></i>
                                                            </div>
                                                            <div className="stop">
                                                                <p>Non-stop</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="arrivalTime">
                                                                <h2>12:00</h2>
                                                            </div>
                                                            <div className="arrivalPlace">
                                                                <h2>City B</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                                    <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                                        <h2>Aircraft Name (Code)</h2>
                                                    </div>
                                                    <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="timeOfDeparture">
                                                                <h2>10:00</h2>
                                                            </div>
                                                            <div className="startingPlace">
                                                                <h2>City B</h2>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="totalTime">
                                                                <p>2h</p>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <hr />
                                                                <i className="fa-solid fa-plane"></i>
                                                            </div>
                                                            <div className="stop">
                                                                <p>Non-stop</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="arrivalTime">
                                                                <h2>12:00</h2>
                                                            </div>
                                                            <div className="arrivalPlace">
                                                                <h2>City A</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                                Rs. Book
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={flight.id} className="flex flex-col gap-[50px] justify-center items-center bg-[#6D99B5]">
                                        <div className="flex justify-center  items-center bg-[#D9D9D9] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                                            <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                                <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                                    <h2>{carrierName} ({carrierCode})</h2>
                                                </div>
                                                <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
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
                                                            <hr className="border-3 border-[#6D99B5]  w-[350px] text-[#6D99B5]" />
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
                                                <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                                    Rs. {amountInINR} Book
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
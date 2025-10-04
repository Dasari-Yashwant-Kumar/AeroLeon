import { useTrip } from "./tripContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faCircleCheck, faCircleXmark, faPlane } from '@fortawesome/free-solid-svg-icons'


export const CheckOut = () => {
    const { selectedFlight, typeOfTrip, departureDate, returnDate, seats } = useTrip();

    if (!selectedFlight) return <p>Loading flight details...</p>;

    const {
        typeOfTrip: selectedTypeOfTrip,
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
        returnLayover
    } = selectedFlight;

    const departureDateobj = new Date(departureDate);
    const option1 = { day: "2-digit", month: "short", year: "numeric" };
    const dayOption1 = { weekday: "short" }

    const finalDepDate = departureDateobj.toLocaleDateString("en-GB", option1);
    const finalDepDay = departureDateobj.toLocaleDateString("en-GB", dayOption1);

    const returnDateobj = new Date(returnDate);
    const option2 = { day: "2-digit", month: "short", year: "numeric" };
    const dayOption2 = { weekday: "short" };

    const finalReturnDate = returnDateobj.toLocaleDateString("en-GB", option2);
    const finalReturnDay = returnDateobj.toLocaleDateString("en-GB", dayOption2);

    return (
        <div className=" bg-[#6D99B5] min-h-screen pb-[3rem] px-[3rem]">
            <div className="flex flex-col pt-[2rem] gap-[2rem] items-center md:flex-row md:justify-evenly md:items-start md:pt-[2rem]" >
                <div
                    className={`flex flex-col gap-[2rem] items-center ${selectedTypeOfTrip === "round" ? "sm:flex-col md:flex-col gap-[2rem]" : "sm:flex-row md:flex-col gap-[7rem]"
                        } `}
                >
                    <div className="basic-flight">
                        {selectedTypeOfTrip === "round" ? (
                            <div className="bg-[#F0EFE7] flex flex-col justify-center items-start pl-[1rem] gap-[2rem] w-[80vw] h-[50vh] max-w-[1200px] max-h-[750px] rounded-[40px] md:w-[40vw] 2xl:text-[40px] 2xl:rounded-[80px] 2xl:mt-[40px]">
                                <div className="flex flex-col gap-[1rem] 2xl:gap-[2rem] 2xl:pl-[40px]">
                                    <div className="font-bold">
                                        <h2>Flight Details: Round Trip</h2>
                                    </div>
                                    <div className="flight-location">
                                        <p className="fromTo">{departure} <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" /> {finalArrival}</p>
                                        <p className="durationstops">{departureTime} - {arrivalTime} ({finalDuration}, {noOfStops != null ? (noOfStops === 0 ? "Non-stop" : `${noOfStops} stop${noOfStops > 1 ? "s" : ""} ${layOver?.join(", ")}`) : null})</p>
                                    </div>

                                    <div className="flex justify-start gap-[0.5rem] 2xl:gap-[3rem] items-center">
                                        <p className="craftName"> {carrierName} </p>
                                        <FontAwesomeIcon className="text-[0.8rem] 2xl:text-[1.2rem]" icon={faCircleDot} />
                                        <p className="day">{finalDepDay}</p>
                                        <FontAwesomeIcon className="text-[0.8rem] 2xl:text-[1.2rem]" icon={faCircleDot} />
                                        <p className="dateOfJourney">{finalDepDate}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[1rem] 2xl:gap-[2rem] 2xl:pt-[1rem] 2xl:pl-[40px]">
                                    <div className="font-bold">
                                        <h2>Return Flight</h2>
                                    </div>
                                    <div className="flight-location">
                                        <p className="fromTo">{returnDeparture} <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" /> {returnArrival}</p>
                                        <p className="durationstops">{finalReturnDepartureTime} - {finalReturnArrivalTime} ({finalReturnDuration}, {returnNoOfStops != null ? (returnNoOfStops === 0 ? "Non-stop" : `${returnNoOfStops} stop${returnNoOfStops > 1 ? "s" : ""} ${returnLayover?.join(", ")}`) : null})</p>
                                    </div>

                                    <div className="flex justify-start gap-[0.5rem] 2xl:gap-[3rem] items-center">
                                        <p className="craftName">{returnCarrierName}</p>
                                        <FontAwesomeIcon className="text-[0.8rem] 2xl:text-[1.2rem]" icon={faCircleDot} />
                                        <p className="day">{finalReturnDay}</p>
                                        <FontAwesomeIcon className="text-[0.8rem] 2xl:text-[1.2rem]" icon={faCircleDot} />
                                        <p className="dateOfJourney">{finalReturnDate}</p>
                                    </div>
                                </div>
                            </div>) : (
                            <div className="bg-[#F0EFE7] flex flex-col justify-center items-start pl-[1rem] gap-[1rem] 2xl:gap-[2rem] w-[80vw] h-[30vh] sm:w-[40vw] max-w-[1200px] max-h-[550px] rounded-[40px] 2xl:text-[40px] 2xl:rounded-[80px] 2xl:mt-[40px]">
                                <div className="font-bold">
                                    <h2>Flight Details: One-Way Trip</h2>
                                </div>
                                <div className="flight-location">
                                    <p className="fromTo">{departure} <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" /> {finalArrival}</p>
                                    <p className="durationstops">{departureTime} - {arrivalTime} ({finalDuration}, {noOfStops != null ? (noOfStops === 0 ? "Non-stop" : `${noOfStops} stop${noOfStops > 1 ? "s" : ""} ${layOver?.join(", ")}`) : null})</p>
                                </div>

                                <div className="flex justify-start gap-[0.5rem] 2xl:gap-[3rem] items-center">
                                    <p className="craftName">{carrierName}</p>
                                    <FontAwesomeIcon className="text-[0.8rem] 2xl:text-[1.2rem]" icon={faCircleDot} />
                                    <p className="day">{finalDepDay}</p>
                                    <FontAwesomeIcon className="text-[0.8rem] 2xl:text-[1.2rem]" icon={faCircleDot} />
                                    <p className="dateOfJourney">{finalDepDate}</p>
                                </div>
                            </div>
                        )
                        }
                    </div>

                    <div className={`bg-[#F0EFE7] flex flex-col justify-center items-start pl-[1rem] gap-[1rem] 2xl:gap-[2rem] w-[80vw] h-[30vh] ${selectedTypeOfTrip === "round" ? "sm:w-[80vw]" : "sm:w-[40vw]"}  md:w-[40vw] ax-w-[1200px] max-h-[550px] rounded-[40px] 2xl:text-[40px] 2xl:rounded-[80px] 2xl:mt-[40px] 2xl:pb-[40px] 2xl:pl-[40px] `}>
                        <div className="font-bold">
                            <h2>Your Fare: Regular Fare</h2>
                        </div>
                        <div className="fare-instructions">
                            <p> <FontAwesomeIcon className="text-[green]" icon={faCircleCheck} /> Carry-on bags included</p>
                            <p><FontAwesomeIcon className="text-[green]" icon={faCircleCheck} /> 1st Checked bag included</p>
                            <p><FontAwesomeIcon className="text-[red]" icon={faCircleXmark} /> Non-refundable</p>
                            <p><FontAwesomeIcon className="text-[red]" icon={faCircleXmark} /> Changes not allowed</p>
                        </div>
                    </div>
                </div>
                {typeOfTrip === "round" ? (<div className="bg-[#F0EFE7] flex flex-col justify-start w-[80vw] h-[45vh] sm:h-[50vh] md:h-[85vh] px-[1.5rem] max-w-[1200px] max-h-[1400px] rounded-[40px] 2xl:rounded-[80px] 2xl:text-[40px] 2xl:mt-[40px]">
                    <h1 className="pt-[1rem] font-bold">Price Summary</h1>
                    <div className=" 2xl:mb-[200px]">
                        <div className="flex justify-between mt-[1rem] 2xl:mt-[50px]">
                            <div className="font-bold">
                                <h3>{seats} Adult</h3>
                            </div>

                            <div className="traveler-amount">
                                <p>₹{amountInINR}</p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-[2rem]">
                            <div className="font-bold">
                                <h3>Flight</h3>
                                <h3>Taxes, fees and charges</h3>
                            </div>
                            <div className="amountbreak-down">
                                <p className="basic-price">₹{Math.round(basePrice * 83)}</p>
                                <p className="tax-amount">₹{Math.round(taxes * 83)}</p>
                            </div>
                        </div>
                    </div>

                    <hr className="bg-[#6D99B5] h-[5px] mt-[1rem] 2xl:h-[10px] 2xl:mb-[30px]" />
                    <div className="flex justify-between items-center mt-[5%] mb-[5%] md:mt-[10%] :mb-[10%]">
                        <h2 className="font-bold">Trip-total</h2>
                        <p>₹{amountInINR}</p>
                    </div>
                    <div className="flex justify-center items-center  ">
                        <button className="bg-[#6D99B5] w-[40vw] h-[5vh] max-w-[448px] max-h-[81px] rounded-[30px] cursor-pointer">Check Out</button>
                    </div>

                </div>
                ) : (
                    <div className="bg-[#F0EFE7] flex flex-col justify-start w-[80vw] h-[40vh] sm:w-[85vw] sm:h-[50vh] md:h-[70vh] px-[1.5rem] max-w-[1200px] max-h-[1400px] rounded-[40px] 2xl:rounded-[80px] 2xl:text-[40px] 2xl:mt-[40px]">
                        <h1 className="pt-[1rem] font-bold">Price Summary</h1>
                        <div className=" 2xl:mb-[200px]">
                            <div className="flex justify-between mt-[1rem] 2xl:mt-[50px]">
                                <div className="font-bold">
                                    <h3>{seats} Adult</h3>
                                </div>

                                <div className="traveler-amount">
                                    <p>₹{amountInINR}</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-[2rem]">
                                <div className="font-bold">
                                    <h3>Flight</h3>
                                    <h3>Taxes, fees and charges</h3>
                                </div>
                                <div className="amountbreak-down">
                                    <p className="basic-price">₹{Math.round(basePrice * 83)}</p>
                                    <p className="tax-amount">₹{Math.round(taxes * 83)}</p>
                                </div>
                            </div>
                        </div>

                        <hr className="bg-[#6D99B5] h-[5px] mt-[1rem] 2xl:h-[10px] 2xl:mb-[30px]" />
                        <div className="flex justify-between items-center mt-[5%] mb-[5%] md:mt-[10%] :mb-[10%]">
                            <h2 className="font-bold">Trip-total</h2>
                            <p>₹{amountInINR}</p>
                        </div>
                        <div className="flex justify-center items-center  ">
                            <button className="bg-[#6D99B5] w-[40vw] h-[5vh] max-w-[448px] max-h-[81px] rounded-[30px] cursor-pointer">Check Out</button>
                        </div>

                    </div>
                )}
            </div >

        </div>

    )
}
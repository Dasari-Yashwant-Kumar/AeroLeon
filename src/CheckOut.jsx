import { useTrip } from "./tripContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faCircleCheck, faCircleXmark, faPlane } from '@fortawesome/free-solid-svg-icons'


export const CheckOut = () => {
    const { selectedFlight, typeOfTrip,departureDate, returnDate, seats } = useTrip();

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

    const departureDateobj = new Date (departureDate);
    const option1 = {day: "2-digit", month: "short", year: "numeric"};
    const dayOption1 = {weekday: "short"}

    const finalDepDate = departureDateobj.toLocaleDateString("en-GB", option1);
    const finalDepDay = departureDateobj.toLocaleDateString("en-GB",dayOption1);

     const returnDateobj = new Date (returnDate);
    const option2 = {day: "2-digit", month: "short", year: "numeric"};
    const dayOption2 = {weekday: "short"};

    const finalReturnDate = returnDateobj.toLocaleDateString("en-GB", option2);
    const finalReturnDay = returnDateobj.toLocaleDateString("en-GB",dayOption2);

    return (
        <div className=" bg-[#6D99B5] h-[100vh]  ">
            <div className="flex justify-evenly items-center pt-[80px]" >
                <div className="flex flex-col gap-[100px] items-center">
                    <div className="basic-flight">
                        {selectedTypeOfTrip === "round" ? (
                            <div className="bg-[#F0EFE7]  w-[1200px] h-[750px] text-[40px] rounded-[80px] pt-[20px] mt-[40px]">
                                <div className="flex flex-col gap-[30px] justify-evenly pt-[15px] pb-[40px] pl-[40px]">
                                    <div className="font-bold">
                                        <h2>Flight Details: Round Trip</h2>
                                    </div>
                                    <div className="flight-location">
                                        <p className="fromTo">{departure} <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" /> {finalArrival}</p>
                                        <p className="durationstops">{departureTime} - {arrivalTime} ({finalDuration}, {noOfStops != null ? (noOfStops === 0 ? "Non-stop" : `${noOfStops} stop${noOfStops > 1 ? "s" : ""} ${layOver?.join(", ")}`) : null})</p>
                                    </div>

                                    <div className="flex justify-start gap-[50px] items-center">
                                        <p className="craftName"> {carrierName} </p>
                                        <FontAwesomeIcon className="text-[20px]" icon={faCircleDot} />
                                        <p className="day">{finalDepDay}</p>
                                        <FontAwesomeIcon className="text-[20px]" icon={faCircleDot} />
                                        <p className="dateOfJourney">{finalDepDate}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[30px] pt-[15px] pb-[40px] pl-[40px]">
                                    <div className="font-bold">
                                        <h2>Return Flight</h2>
                                    </div>
                                    <div className="flight-location">
                                        <p className="fromTo">{returnDeparture} <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" /> {returnArrival}</p>
                                        <p className="durationstops">{finalReturnDepartureTime} - {finalReturnArrivalTime} ({finalReturnDuration}, {returnNoOfStops != null ? (returnNoOfStops === 0 ? "Non-stop" : `${returnNoOfStops} stop${returnNoOfStops > 1 ? "s" : ""} ${returnLayover?.join(", ")}`) : null})</p>
                                    </div>

                                    <div className="flex justify-start gap-[50px] items-center">
                                        <p className="craftName">{returnCarrierName}</p>
                                        <FontAwesomeIcon className="text-[20px]" icon={faCircleDot} />
                                        <p className="day">{finalReturnDay}</p>
                                        <FontAwesomeIcon className="text-[20px]" icon={faCircleDot} />
                                        <p className="dateOfJourney">{finalReturnDate}</p>
                                    </div>
                                </div>
                            </div>) : (
                            <div className="bg-[#F0EFE7] w-[1200px] h-[550px] rounded-[80px] text-[40px] flex flex-col justify-evenly pb-[40px] pl-[40px] mt-[40px]">
                                <div className="font-bold">
                                    <h2>Flight Details: One-Way Trip</h2>
                                </div>
                                <div className="flight-location">
                                    <p className="fromTo">{departure} <FontAwesomeIcon icon={faPlane} className="text-[#6D99B5]" /> {finalArrival}</p>
                                    <p className="durationstops">{departureTime} - {arrivalTime} ({finalDuration}, {noOfStops != null ? (noOfStops === 0 ? "Non-stop" : `${noOfStops} stop${noOfStops > 1 ? "s" : ""} ${layOver?.join(", ")}`) : null})</p>
                                </div>

                                <div className="flex justify-start gap-[50px] items-center">
                                    <p className="craftName">{carrierName}</p>
                                    <FontAwesomeIcon className="text-[20px]" icon={faCircleDot} />
                                    <p className="day">{finalDepDay}</p>
                                    <FontAwesomeIcon className="text-[20px]" icon={faCircleDot} />
                                    <p className="dateOfJourney">{finalDepDate}</p>
                                </div>
                            </div>
                        )
                        }
                    </div>

                    <div className="bg-[#F0EFE7] w-[1200px] h-[550px] rounded-[80px] text-[40px] flex flex-col justify-evenly pb-[40px] pl-[40px]">
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
                {typeOfTrip === "round" ? (<div className="bg-[#F0EFE7] w-[1200px] h-[1400px] rounded-[80px] text-[40px] flex flex-col justify-start mt-[50px] pt-[50px] px-[40px]">
                    <h1 className="font-bold">Price Summary</h1>
                    <div className="mb-[200px]">
                        <div className="flex justify-between mt-[50px]">
                            <div className="font-bold">
                                <h3>{seats} Adult</h3>
                            </div>

                            <div className="traveler-amount">
                                <p>₹{amountInINR}</p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-[50px]">
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

                    <hr className="bg-[#6D99B5] h-[10px] mb-[30px]" />
                    <div className="flex justify-between items-center mt-[10%] mb-[20%]">
                        <h2 className="font-bold">Trip-total</h2>
                        <p>₹{amountInINR}</p>
                    </div>
                    <div className="flex justify-center items-center  ">
                        <button className="bg-[#6D99B5] text-[white] w-[800px] h-[150px] rounded-[30px] cursor-pointer">Check Out</button>
                    </div>

                </div>
                ) : (
                    <div className="bg-[#F0EFE7] w-[1200px] h-[1200px] rounded-[80px] text-[40px] flex flex-col justify-start mt-[50px] pt-[30px] px-[40px] ">
                        <h1 className="font-bold">Price Summary</h1>
                        <div className="mb-[200px]">
                            <div className="flex justify-between mt-[50px]">
                                <div className="font-bold">
                                    <h3>{seats} Adult</h3>
                                </div>

                                <div className="traveler-amount">
                                    <p>₹{amountInINR}</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-[50px]">
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

                        <hr className="bg-[#6D99B5] h-[10px] mb-[30px]" />
                        <div className="flex justify-between items-center mt-[10%] mb-[10%]">
                            <h2 className="font-bold">Trip-total</h2>
                            <p>₹{amountInINR}</p>
                        </div>
                        <div className="flex justify-center items-center  ">
                            <button className="bg-[#6D99B5] w-[448px] h-[81px] rounded-[30px] cursor-pointer">Check Out</button>
                        </div>

                    </div>
                )}
            </div >

        </div>

    )
}
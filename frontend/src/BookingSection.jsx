import TypeOfTrip from "./TypeOfTrip";
import FromTo from "./FromTo";
import DepartureReturn from "./DepartureReturn";
import Seats from "./Seats";
import plane2 from "./assets/plane2.jpg";
import { useTrip } from "./tripContext";
import { ShimmerUI } from "./ShimmerUI";
import { useState } from "react";
import { FlightInfo } from "./FlightInfo";

const BookingSection = () => {
    const [loading, setLoading] = useState(false);
    const [flights, setFlight] = useState(null);
    const { typeOfTrip, departureDate, returnDate, seats, from, to } = useTrip();

    const formatDateForAPI = (date) => {
        if (!date) return '';
        const dateObj = new Date(date);
        return dateObj.toISOString().split('T')[0];
    };

    const showShimmer = async () => {
        if (departureDate && (typeOfTrip === "round" ? returnDate : true) && seats) {

            setTimeout(() => {
                const shimmerSection = document.getElementById('shimmer-section');
                if (shimmerSection) {
                    shimmerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
            setLoading(true);
            setFlight(null);
            try {
                const formattedDepartureDate = formatDateForAPI(departureDate);
                const formattedReturnDate = formatDateForAPI(returnDate);

                let url = `https://aeroleon.onrender.com/api/flights?from=${fromIata}&to=${toIata}&departureDate=${formattedDepartureDate}&adults=${seats}&typeOfTrip=${typeOfTrip}`;

                if (typeOfTrip?.toLowerCase() === "round" && returnDate) {
                    url += `&returnDate=${formattedReturnDate}`;
                }

                const response = await fetch(url);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`)
                }
                setFlight(result || [])

            } catch (error) {
                console.log("Error Fetching Flights:", error.message)
            } finally {
                setLoading(false);
            }


        } else {
            alert("Fill all the Sections");
        }
    }
    const fromIata = from?.iata_code || from?.iata || from?.code || "";
    const toIata = to?.iata_code || to?.iata || to?.code || "";


    return (
        <div className="flex justify-center items-center bg-[#CECCC8] min-h-full relative">
            <img className="w-[80vw] h-[80vh] max-w-[150rem] max-h-[65.625rem] rounded-[5rem]" src={plane2} alt="Plane" />
            <h1 className="absolute top-[15%] left-[15%] text-[1.5rem] sm:text-[2rem] md:text-[3rem]">Hey guys! Where are you <br />Flying to?</h1>
            <div className="absolute top-[88%] flex flex-col w-[60vw] h-[20vh]  w-[70vw] md:h-[16vh] max-w-[131.25rem] max-h-[21.875rem] bg-[#F0EFE7] rounded-[2rem] md:rounded-[2.5rem]">
                <TypeOfTrip />
                {typeOfTrip === "round" ?
                    <div className="flex flex-col justify-center items-center gap-[0.2rem] md:justify-evenly  md:items-center md:ml-2">
                        <div className="relative flex flex-col gap-[0.2rem] md:flex-row md:gap-[1.5rem] md:justify-center md:items-center">
                            <FromTo />
                            <DepartureReturn />
                            <div className="flex flex-row gap-[1rem]">
                                <Seats />
                                <div className="md:flex md:flex-col">
                                    <label htmlFor="search" className="hidden md:block text-[1rem]">Search</label>
                                    <button id="search" onClick={showShimmer} className="w-[25vw] h-[4vh] md:w-[6vw] max-w-[18rem] max-h-[5rem] text-[0.8rem] border-2 rounded-md bg-[#6D99B5] text-white text-center">
                                        GO
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div> :

                    <div className="flex flex-col justify-evenly items-center gap-[0.2rem] md:flex-row md:gap-[1rem] md:justify-center md:items-center md:ml-[5%]">
                        <div className="relative flex flex-col gap-[0.2rem] md:flex-row md:gap-[1rem] md:justify-center md:items-center">
                            <FromTo />
                            <div className="flex flex-row gap-[1rem] md:justify-evenly">
                                <DepartureReturn />
                                <Seats />
                            </div>
                        </div>
                        <div className="md:flex md:flex-col">
                            <label htmlFor="search" className="hidden md:block text-[1rem]">Search</label>
                            <button id="search" onClick={showShimmer} className=" w-[25vw] h-[4vh] md:w-[6vw] max-w-[18rem] max-h-[5rem] text-[0.8rem] border-2 rounded-md bg-[#6D99B5] text-white text-center">
                                GO
                            </button>
                        </div>

                    </div>
                }
            </div>
            {(loading || flights) && (
                <div id="shimmer-section" className="absolute top-[130%] w-full flex justify-center bg-[#CECCC8] h-[100vh]">
                    {loading ? <ShimmerUI /> : <FlightInfo flights={flights} />}
                </div>
            )}
        </div>
    );
};

export default BookingSection;
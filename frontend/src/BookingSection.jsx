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
        <div className="flex justify-center items-center relative">
            <img className="w-full max-w-[150rem] h-[65.625rem] rounded-[6.25rem]" src={plane2} alt="Plane" />
            <h1 className="absolute top-[15%] right-[45%] text-[100px]">Hey guys! Where are you <br />Flying to?</h1>
            <div className="absolute top-[90%] flex flex-col w-full max-w-[131.25rem] h-[21.875rem] md:h-[23 rem] bg-[#F0EFE7] rounded-[6.25rem] mx-auto">
                <TypeOfTrip />
                {typeOfTrip === "round" ?
                    <div className="flex justify-evenly items-center ml-2 mr-8 mt-2 md:ml-4 md:mr-16 md:mt-4">
                        <div className="relative flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-start">
                            <FromTo />
                            <DepartureReturn />
                            <Seats />
                        </div>

                        <div className="search">
                            <button onClick={showShimmer} className="absolute top-[54%] right-4 md:right-24 w-40 md:w-[15.625rem] h-16 md:h-[5rem] text-white text-lg 
                            md:text-[2.1875rem] rounded-lg bg-[#6D99B5] text-center">Search</button>
                        </div>
                    </div> :

                    <div className="flex justify-evenly items-center ml-[5%] mr-[10%] mt-[0.8%]">
                        <div className="flex gap-[6.25rem] items-start">
                            <FromTo />
                            <DepartureReturn />
                            <Seats />
                        </div>
                        <div className="search">
                            <button onClick={showShimmer} className="absolute top-[54%] right-[12.5rem] w-[15.625rem] h-[5rem] text-white text-[2.1875rem] 
                            rounded-[0.625rem] border-3 bg-[#6D99B5] text-center">Search</button>
                        </div>
                    </div>
                }
            </div>
            {(loading || flights) && (
                <div id="shimmer-section" className="absolute top-[130%] w-full flex justify-center bg-[#CECCC8] h-[100vh]">
                    {loading ? <ShimmerUI /> : <FlightInfo flights = {flights}/>}
                </div>
            )}
        </div>
    );
};

export default BookingSection;
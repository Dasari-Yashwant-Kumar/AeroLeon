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
    const { typeOfTrip, departure, returnDate, seats, from, to } = useTrip();

    const showShimmer = async () => {
        if (departure && (typeOfTrip === "round" ? returnDate : true) && seats) {
            setLoading(true);
            setFlight(null);
            try {
                let url = `http://localhost:5000/api/flights?from=${fromIata}&to=${toIata}&departureDate=${departure}&adults=${seats}&typeOfTrip=${typeOfTrip}`;

                if (typeOfTrip?.toLowerCase() === "round" && returnDate) {
                    url += `&returnDate=${returnDate}`;
                }

                console.log("API URL:", url);

                const response = await fetch(url);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`)
                }

                console.log("Full API Response Object:", result);
                console.log("Flight Data Array:", result.data);
                setFlight(result.data || [])

            } catch (error) {
                console.log("Error Fetching Flights:", error.message)
            } finally {
                setLoading(false);
            }

            setTimeout(() => {
                const shimmerSection = document.getElementById('shimmer-section');
                if (shimmerSection) {
                    shimmerSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            alert("Fill all the Sections");
        }
    }
    const fromIata = from?.iata_code || from?.iata || from?.code || "";
    const toIata = to?.iata_code || to?.iata || to?.code || "";


    return (
        <div className="flex justify-center items-center relative">
            <img className="relative w-[2400px] h-[1050px] rounded-[100px]" src={plane2} alt="Plane" />
            <h1 className="absolute top-[15%] right-[45%] text-[100px]">Hey guys! Where are you <br />Flying to?</h1>
            <div className="absolute top-[90%] flex flex-col w-[2100px] h-[350px] bg-[#F0EFE7] rounded-[100px]">
                <TypeOfTrip />
                {typeOfTrip === "round" ?
                    <div className="flex justify-evenly items-center ml-[40px] mr-[200px] mt-[30px]">
                        <div className="relative flex gap-[50px] justify-center items-center">
                            <FromTo />
                            <DepartureReturn />
                            <Seats />
                        </div>

                        <div className="search">
                            <button onClick={showShimmer} className="absolute top-[58%] right-[100px] w-[250px] h-[80px] text-white
                        text-[35px] rounded-[10px] border-3 bg-[#6D99B5] text-center">Search</button>
                        </div>
                    </div> :

                    <div className="flex justify-evenly items-center ml-[40px] mr-[200px] mt-[30px]">
                        <div className="flex gap-[100px]">
                            <FromTo />
                            <DepartureReturn />
                            <Seats />
                        </div>
                        <div className="search">
                            <button onClick={showShimmer} className="absolute top-[58%] right-[200px] w-[250px] h-[80px] text-white
                        text-[35px] rounded-[10px] border-3 bg-[#6D99B5] text-center">Search</button>
                        </div>
                    </div>
                }
            </div>
            {(loading || flights) && (
                <div id="shimmer-section" className="absolute top-[130%] w-full flex justify-center bg-[#CECCC8] h-[100vh]">
                    {loading ? <ShimmerUI /> : <FlightInfo />}
                </div>
            )}
        </div>
    );
};

export default BookingSection;
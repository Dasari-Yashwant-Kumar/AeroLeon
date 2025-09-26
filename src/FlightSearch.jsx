import FlightSearchHeader from "./FlightSearchHeader"
import BookingSection from "./BookingSection";
import {TripProvider} from "./tripContext";




const FlightSearch = () => {
    return (
        <div className = "bg-[#CECCC8] min-h-screen">
            <FlightSearchHeader />
            <TripProvider>
            <BookingSection />
            </TripProvider>
        </div>
        
    )
};

export default FlightSearch;
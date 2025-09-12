import {useTrip} from "./tripContext";

const DepartureReturn = () => {

    const {typeOfTrip, departure, setDeparture, returnDate, setReturnDate} = useTrip();
    return (
        <>
            <div className="basic-details">
                <label htmlFor="departure" className = "text-[35px]">Departure</label>
                <div className="relative flex flex-col">
                     <input type="date" value = {departure} name="trip" onChange = {(e)=> setDeparture(e.target.value)} className="w-[300px] h-[80px] text-[25px] rounded-[10px] px-[40px] border-3 bg-white" />
                </div>
            </div>

            {typeOfTrip === "round" && (

            <div className="basic-details" id="return-section">
                <label htmlFor="return" className = "text-[35px]">Return</label>
                <div className="relative flex flex-col">
                    <input type="date" value = {returnDate} name="trip" onChange ={(e)=> setReturnDate(e.target.value)} className="w-[300px] h-[80px] text-[25px] rounded-[10px] px-[40px] border-3 bg-white" />
                </div>
            </div>
            )}
        </>
    )
};

export default DepartureReturn;
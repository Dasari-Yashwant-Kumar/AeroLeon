import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useTrip} from "./tripContext";


const Seats = () => {
const {seats, setSeats} = useTrip();

    return (

        <div className="basic-details">
            <label htmlFor="seats" className="text-[1rem]">Seats</label>
            <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute top-[50%] left-[10px] -translate-y-[50%] text-[#6D99B5] text-[1rem]" />
                <input type="number" value = {seats} onChange = {(e)=> setSeats(e.target.value)} className="w-[5vw] h-[4vh] max-w-[10 rem] max-h-[5rem] text-[0.8rem] rounded-[10px] pl-[2rem] pr-[0.5rem] border-2 bg-white" />
            </div>
        </div>
    )
};

export default Seats;
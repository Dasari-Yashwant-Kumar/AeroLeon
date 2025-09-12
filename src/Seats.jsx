import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useTrip} from "./tripContext";


const Seats = () => {
const {seats, setSeats} = useTrip();

    return (

        <div className="basic-details">
            <label htmlFor="seats" className="text-[35px]">Seats</label>
            <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute top-[50%] left-[20px] -translate-y-[50%] text-[#6D99B5] text-[40px]" />
                <input type="number" value = {seats} onChange = {(e)=> setSeats(e.target.value)} className="w-[150px] h-[80px] text-[25px] rounded-[10px] pl-[70px] pr-[20px] border-3 bg-white" />
            </div>
        </div>
    )
};

export default Seats;
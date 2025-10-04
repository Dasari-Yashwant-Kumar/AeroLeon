import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useTrip} from "./tripContext";


const Seats = () => {
const {seats, setSeats} = useTrip();

    return (

        <div className="basic-details">
            <label htmlFor="seats" className="hidden md:block text-[1rem]  2xl:text-[2rem]">Seats</label>
            <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute top-[50%] left-[10px] -translate-y-[50%] text-[#6D99B5] text-[1rem]  2xl:text-[2rem]" />
                <input type="number" placeholder = "Seats" value = {seats} onChange = {(e)=> setSeats(e.target.value)} className="w-[25vw] h-[4vh] rounded-[5px] max-w-[18 rem] max-h-[5rem] text-[0.8rem] md:placeholder-transparent md:w-[6vw] md:rounded-[10px] pl-[2rem] border-2 bg-white  2xl:text-[2rem] 2xl:pl-[4rem] 2xl:pr-[2rem]" />
            </div>
        </div>
    )
};

export default Seats;
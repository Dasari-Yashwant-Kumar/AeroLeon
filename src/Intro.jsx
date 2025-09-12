import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

const Landingpage = () => {
    return (
        <div className="p-0 m-0 flex justify-center items-center h-screen relative font-sans">
            <img className="w-[2400px] h-[1350px] rounded-[60px]" src={plane1} alt="plane" />

            <div className="absolute top-[15%] left-1/2 -translate-x-[90%]" id="content">
                <h1 className="text-[#262D2D] text-[85px] font-sora ">AeroLeon</h1>

                <div className="mt-24 flex flex-col gap-8 text-[#FFFFFF]">
                    <h1 className="text-[150px]">Explore the World</h1>
                    <p className="text-[40px]">Take off to new destinations with AeroLeon. Book
                        <br />flights easily and start your next adventure without hassle.
                        <br />The world is waiting—let’s explore it together!
                    </p>
                    <Link to="/FlightSearch">
                        <div className="text-[25px] flex gap-[10px] items-center cursor-pointer" id="adventure">
                            <p className="text-[40px]">Start My Adventure</p>
                            <FontAwesomeIcon icon={faArrowRight} className='mt-2.5 !w-[40px] !h-[40px]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;
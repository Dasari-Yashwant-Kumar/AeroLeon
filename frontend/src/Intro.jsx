import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

const Landingpage = () => {
    return (
        <div className="p-0 m-0 flex justify-center items-center min-h-screen relative font-sans">
            <img className="w-[150rem] h-[84.375rem] rounded-[3.75rem]" src={plane1} alt="plane" />

            <div className="absolute top-[15%] left-1/2 -translate-x-[90%]" id="content">
                <h1 className="text-[#262D2D] text-[5.3125rem] font-sora ">AeroLeon</h1>

                <div className="mt-24 flex flex-col gap-8 text-[#FFFFFF]">
                    <h1 className="text-[9.375rem] font-sora">Explore the World</h1>
                    <p className="text-[2.5rem] font-sora">Take off to new destinations with AeroLeon. Book
                        <br />flights easily and start your next adventure without hassle.
                        <br />The world is waiting—let’s explore it together!
                    </p>
                    <Link to="/FlightSearch">
                        <div className="text-[1.5625rem] flex gap-[0.625rem] items-center cursor-pointer" id="adventure">
                            <p className="text-[2.5rem] font-sora">Start My Adventure</p>
                            <FontAwesomeIcon icon={faArrowRight} className='mt-2.5 !w-[2.5rem] !h-[2.5rem]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;
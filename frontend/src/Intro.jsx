import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Landingpage = () => {
    return (
        <div className="p-0 m-0 bg-[#262D2D] font-sans">
            <div className = "relative flex justify-center items-center  min-h-screen overflow-y-hidden">
            <img className="h-[35rem] w-[21rem] rounded-[2rem]" src={plane1} alt="plane" />

            <div className=" absolute lg:top-[25%] lg:left-[10%] 2xl:left-[15%] ">

                <h1 className="text-[#262D2D] absolute top-[-1rem] left-[50%] -translate-x-[50%] 
                text-[2rem] md:top-[-1rem] md:text-[4rem] lg:text-[5rem] lg:static lg:translate-x-0 lg:text-left xl:static xl:translate-x-0 xl:text-left font-sora ">AeroLeon</h1>

                <div className="flex flex-col items-center justify-center text-center mt-[5rem] gap-[25rem]
                 md:mt-[5rem] lg:mt-[5rem] lg:flex  lg:justify-start lg:items-start lg:gap-[5rem] text-[#FFFFFF]">

                    <div className="lg:flex  lg:flex-col lg:justify-start lg:items-start lg:gap-[1rem]">

                        <h1 className="text-[1rem] md:text-[2rem] lg:text-[3rem] lg:px-0 xl:text-[4rem] font-sora">Explore the World</h1>

                        <p className="px-[3rem] text-center text-sm pt-[1rem] text-white md:text-[1.5rem] 
                        max-w-lg md:max-w-2xl lg:pt-0 lg:px-0 lg:text-left lg:text-[1.5rem] xl:text-[2rem] font-sora">Take off to new destinations with AeroLeon. Book
                            flights easily and start your next adventure without hassle.
                            The world is waiting—let’s explore it together!
                        </p>
                    </div>
                    <Link to="/FlightSearch">
                        <div className="text-[1.2rem] gap-[1rem] flex items-center justify-center text-center pt-[2rem] md:text-[2rem]
                         font-sora cursor-pointer" id="adventure">
                            <p>Start My Adventure</p>
                            <FontAwesomeIcon icon={faArrowRight} className='lg:mt-2.5 lg:!w-[2.5rem] lg:!h-[2.5rem]' />
                        </div>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Landingpage;
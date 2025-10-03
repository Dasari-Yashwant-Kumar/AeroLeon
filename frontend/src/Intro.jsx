import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Landingpage = () => {
    console.log(window.innerHeight)
    return (
        
        <div className="p-[10%] bg-[#262D2D] flex justify-center items-center h-screen overflow-y-hidden">
            
            <div className="relative">
                <img className=" w-[75vw] h-[80vh] max-w-[2500px] max-h-[1500px] rounded-[50px]" src={plane1} alt="plane" />

              <div className="absolute top-[2rem] flex flex-col justify-center items-center text-center px-4 gap-[2rem] 
    text-[0.8rem] md:top-[5rem] md:items-start md:text-left md:gap-[4rem] md:pr-[18rem] lg:pr-[19.2rem]">

                    <h1 className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">AeroLeon</h1>

                    <div className="md:flex md:flex-col md:items-start md:text-left md:gap-[5rem] text-[#FFFFFF]">
                        <div>
                            <h1 className="pb-4 sm:text-[1.5rem] md:text-[2rem]">Explore the World</h1>
                            <p className="sm:text-[1rem] md:text-[1rem]">Take off to new destinations with AeroLeon. Book
                                flights easily and start your next adventure without hassle.
                                The world is waiting—let’s explore it together!
                            </p>
                        </div>
                        <Link to="/FlightSearch">
                            <div className="gap-2 flex items-center justify-center text-center text-[1rem] pt-[18rem] md:pt-[0] sm:text-[1rem] md:text-[1.2rem]
                        cursor-pointer" id="adventure">
                                <p>Start My Adventure</p>
                                <FontAwesomeIcon icon={faArrowRight} className="sm:text-[1rem] md:text-[1.2rem]" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;



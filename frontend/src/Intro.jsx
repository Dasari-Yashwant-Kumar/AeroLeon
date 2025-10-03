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
                <img className=" w-[80vw] h-[80vh] max-w-[2500px] max-h-[1500px] rounded-[50px]" src={plane1} alt="plane" />

              <div className="absolute top-[2rem] flex flex-col justify-center items-center text-center px-4 gap-[2rem] 
    text-[0.8rem] md:top-[4rem] md:items-start md:text-left md:gap-[2.5rem] md:pl-[2rem] md:pr-[22rem] lg:pr-[29rem] xl:top-[5rem] xl:pr-[33rem] 2xl:top-[10rem] 2xl:pr-[75rem] 2xl:gap-[8rem]">

                    <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] 2xl:text-[5rem]">AeroLeon</h1>

                    <div className="md:flex md:flex-col md:items-start md:text-left md:gap-[3rem] lg:gap-[2rem] 2xl:gap-[10rem] text-[#FFFFFF]">
                        <div>
                            <h1 className="pb-4 text-[1.6rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.4rem] 2xl:text-[4rem] ">Explore the World</h1>
                            <p className="sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] 2xl:text-[3rem]">Take off to new destinations with AeroLeon. Book
                                flights easily and start your next adventure without hassle.
                                The world is waiting—let’s explore it together!
                            </p>
                        </div>
                        <Link to="/FlightSearch">
                            <div className="gap-2 flex items-center justify-center text-center text-[1rem] pt-[18rem] md:pt-[0] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]
                         2xl:text-[3rem] cursor-pointer" id="adventure">
                                <p>Start My Adventure</p>
                                <FontAwesomeIcon icon={faArrowRight} className="sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]  2xl:text-[3rem]" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;



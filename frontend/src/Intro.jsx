import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

const Landingpage = () => {
    return (
        <div className="p-0 m-0 flex justify-center items-center min-h-screen relative font-sans">
            {/* Background plane image */}
            <img 
                className="w-[90vw] max-w-[150rem] h-[80vh] max-h-[84.375rem] rounded-[3.75rem] object-cover" 
                src={plane1} 
                alt="plane" 
            />

            {/* Content overlay */}
            <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 md:-translate-x-[45%] px-4 md:px-0" id="content">
                
                {/* Logo */}
                <h1 className="text-[#262D2D] text-4xl md:text-5xl lg:text-[5.3125rem] font-sora">
                    AeroLeon
                </h1>

                <div className="mt-6 md:mt-24 flex flex-col gap-4 md:gap-8 text-white">
                    {/* Main heading */}
                    <h1 className="text-3xl md:text-6xl lg:text-[9.375rem] font-sora">
                        Explore the World
                    </h1>

                    {/* Description paragraph */}
                    <p className="text-base md:text-xl lg:text-[2.5rem] font-sora">
                        Take off to new destinations with AeroLeon. Book<br />
                        flights easily and start your next adventure without hassle.<br />
                        The world is waiting—let’s explore it together!
                    </p>

                    {/* Adventure button/link */}
                    <Link to="/FlightSearch">
                        <div className="flex flex-row md:flex-row gap-2 md:gap-4 items-center cursor-pointer">
                            <p className="text-lg md:text-2xl lg:text-[2.5rem] font-sora">
                                Start My Adventure
                            </p>
                            <FontAwesomeIcon 
                                icon={faArrowRight} 
                                className="w-6 h-6 md:w-10 md:h-10 lg:w-[2.5rem] lg:h-[2.5rem] mt-1 md:mt-2" 
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;

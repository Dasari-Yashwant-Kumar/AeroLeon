import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Landingpage = () => {
    return (
       
<div className="p-8 lg:p-16 2xl:p-32 relative flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen bg-[#262D2D] overflow-hidden">
    
    {/* Image */}
   <img className="w-full max-w-[1500px] h-auto rounded-[55px] mb-8 lg:mb-0 lg:mr-16"  src={plane1} alt="plane" />

    {/* Text Content */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora mb-6">AeroLeon</h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-sora mb-4">Explore the World</h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-lg md:max-w-xl lg:max-w-2xl mb-6">
            Take off to new destinations with AeroLeon. Book flights easily and start your next adventure without hassle.
            The world is waiting—let’s explore it together!
        </p>
        <Link to="/FlightSearch">
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 text-lg md:text-2xl cursor-pointer font-sora">
                <p>Start My Adventure</p>
                <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6 md:w-8 md:h-8" />
            </div>
        </Link>
    </div>
</div>

    );
}

export default Landingpage;


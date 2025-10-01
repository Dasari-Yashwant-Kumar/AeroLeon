import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Landingpage = () => {
    return (
        <div className="bg-[#262D2D] font-sans p-0 m-0">
            {/* Container */}
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen overflow-hidden px-4 lg:px-16 2xl:px-32">

                {/* Image */}
                <img
                    src={plane1}
                    alt="plane"
                    className="w-full max-w-[350px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1200px] h-auto rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.75rem] mb-8 lg:mb-0 lg:mr-16"
                />

                {/* Text content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white">
                    
                    {/* Heading */}
                    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-sora mb-6 lg:mb-8">
                        AeroLeon
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-sora mb-4">
                        Explore the World
                    </h2>

                    {/* Paragraph */}
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-lg md:max-w-xl lg:max-w-2xl mb-6">
                        Take off to new destinations with AeroLeon. Book flights easily and start your next adventure without hassle. The world is waiting—let’s explore it together!
                    </p>

                    {/* Button / Link */}
                    <Link to="/FlightSearch">
                        <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 text-lg md:text-2xl xl:text-2xl cursor-pointer font-sora">
                            <p>Start My Adventure</p>
                            <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Landingpage;

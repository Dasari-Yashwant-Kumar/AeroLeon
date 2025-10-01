import './index.css';
import plane1 from './assets/plane1.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Landingpage = () => {
    console.log(window.innerHeight)
    return (
        
        <div className="p-[10%] bg-[#262D2D] flex justify-center items-center h-screen overflow-y-hidden font-sans">
            
            <div className="relative">
                <img className=" w-[67vw] h-[80vh] max-w-[1300px] max-h-[700px] rounded-[50px]" src={plane1} alt="plane" />

                <div className="">

                    <h1 className="absolute top-[2rem] left-[50%] -translate-x-[50%] text-[#262D2D]">AeroLeon</h1>

                    <div className="text-center text-[#FFFFFF]">

                        <div className="text-[0.8rem]">

                            <h1 className="absolute top-[4rem] left-[50%] -translate-x-[50%] font-sora">Explore the World</h1>

                            <p className="absolute top-[6rem] left-[50%] -translate-x-[50%] font-sora">Take off to new destinations with AeroLeon. Book
                                flights easily and start your next adventure without hassle.
                                The world is waiting—let’s explore it together!
                            </p>
                        </div>
                        <Link to="/FlightSearch">
                            <div className="absolute top-[30rem] left-[50%] -translate-x-[50%] text-[0.8rem] gap-2 flex items-center justify-center text-center pt-[2rem] md:text-[1rem]
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



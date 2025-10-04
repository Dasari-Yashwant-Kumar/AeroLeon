const FlightSearchHeader = () => {
    return (
        <div className="flex justify-evenly items-center md:mx-[1rem]">
            <h1 className="text-[3rem] 2xl:text-[5rem]">AeroLeon</h1>
            <ul className="hidden lg:flex gap-[5rem] items-center list-none">
                <li className="text-[1.5rem] 2xl:text-[3rem]">Booking</li>
                <li className="text-[1.5rem] 2xl:text-[3rem]" >Manage Account</li>
                <li className="text-[1.5rem] 2xl:text-[3rem]">Sign In</li>
            </ul>
        </div>
    );
};

export default FlightSearchHeader;
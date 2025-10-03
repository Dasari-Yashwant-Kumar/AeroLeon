const FlightSearchHeader = () => {
    return (
        <div className="flex justify-evenly items-center m-[1rem]">
                <h1 className = "text-[3rem]">AeroLeon</h1>
                <ul className = "flex gap-[2rem] items-center list-none">
                    <li className = "text-[1.5rem]">Booking</li>
                    <li className = "text-[1.5rem]" >Manage Account</li>
                    <li className = "text-[1.5rem]">Sign In</li>
                </ul>
            </div>
    );
};

export default FlightSearchHeader;
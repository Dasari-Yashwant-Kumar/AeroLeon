const FlightSearchHeader = () => {
    return (
        <div className="flex justify-evenly items-center m-[1rem]">
                <h1 className = "text-[100px]">AeroLeon</h1>
                <ul className = "flex gap-[180px] items-center list-none ml-[10rem]">
                    <li className = "text-[50px]">Booking</li>
                    <li className = "text-[50px]" >Manage Account</li>
                    <li className = "text-[50px]">Sign In</li>
                </ul>
            </div>
    );
};

export default FlightSearchHeader;
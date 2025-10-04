const Bottom = () => {
    return (
        <div className="flex flex-col items-center justify-evenly lg:flex-row lg:justify-between pb-[1rem] lg:px-[5rem] bg-[#6D99B5] h-[20vh] max-h-[250px] w-full text-white">
            <div className="text-[2rem] 2xl:text-[5rem] font-bold">
                <h1>AeroLeon</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-[2rem] text-[1rem] sm:text-[1.2rem] 2xl:text-[2.5rem]">
                <div className="flex flex-col items-center lg:items-start">
                    <h3>Help</h3>
                    <h3>About</h3>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h3>Cookies Policies</h3>
                    <h3>Terms of Service</h3>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h3>Privacy Policies</h3>
                    <h3>Privacy Settings</h3>
                </div>
            </div>
        </div>
    );
};

export default Bottom;

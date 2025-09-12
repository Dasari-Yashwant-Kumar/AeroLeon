import { useTrip } from "./tripContext";

export const FlightInfo = () => {
      const { typeOfTrip } = useTrip();

    return (
        <div className="bg-[#CECCC8] w-full h-[100vh]">
            <div className="flights">
                <div className="flex justify-center items-center">
                    <div className="flex flex-column justify-center items-center bg-[#6D99B5] w-[2400px] pt-[40px] pb-[40px] rounded-[50px] mt-[10rem]  ">
                        {typeOfTrip === "round" ? (
                            <div className = "flex flex-col justify-evenly items-center" >
                            <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[2100px] h-[650px] font-bold text-[40px] mt-[2rem] rounded-[120px]">
                                <div className="flex gap-[20px] justify-center items-center flex-col">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem]">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                            <h2>Aircraft Name (Code)</h2>
                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="timeOfDeparture">
                                                    <h2>10:00</h2>
                                                </div>
                                                <div className="startingPlace">
                                                    <h2>City A</h2>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="totalTime">
                                                    <p>2h</p>
                                                </div>
                                                <div className="arrow-icon">
                                                    <hr />
                                                    <i className="fa-solid fa-plane"></i>
                                                </div>
                                                <div className="stop">
                                                    <p>Non-stop</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="arrivalTime">
                                                    <h2>12:00</h2>
                                                </div>
                                                <div className="arrivalPlace">
                                                    <h2>City B</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                            <h2>Aircraft Name (Code)</h2>
                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="timeOfDeparture">
                                                    <h2>10:00</h2>
                                                </div>
                                                <div className="startingPlace">
                                                    <h2>City B</h2>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="totalTime">
                                                    <p>2h</p>
                                                </div>
                                                <div className="arrow-icon">
                                                    <hr />
                                                    <i className="fa-solid fa-plane"></i>
                                                </div>
                                                <div className="stop">
                                                    <p>Non-stop</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="arrivalTime">
                                                    <h2>12:00</h2>
                                                </div>
                                                <div className="arrivalPlace">
                                                    <h2>City A</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                    Rs. Book
                                </button>
                            </div>

                            <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[2100px] h-[650px] font-bold text-[40px] mt-[2rem] rounded-[120px]">
                                <div className="flex gap-[20px] justify-center items-center flex-col">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem]">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                            <h2>Aircraft Name (Code)</h2>
                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="timeOfDeparture">
                                                    <h2>10:00</h2>
                                                </div>
                                                <div className="startingPlace">
                                                    <h2>City A</h2>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="totalTime">
                                                    <p>2h</p>
                                                </div>
                                                <div className="arrow-icon">
                                                    <hr />
                                                    <i className="fa-solid fa-plane"></i>
                                                </div>
                                                <div className="stop">
                                                    <p>Non-stop</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="arrivalTime">
                                                    <h2>12:00</h2>
                                                </div>
                                                <div className="arrivalPlace">
                                                    <h2>City B</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                            <h2>Aircraft Name (Code)</h2>
                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="timeOfDeparture">
                                                    <h2>10:00</h2>
                                                </div>
                                                <div className="startingPlace">
                                                    <h2>City B</h2>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="totalTime">
                                                    <p>2h</p>
                                                </div>
                                                <div className="arrow-icon">
                                                    <hr />
                                                    <i className="fa-solid fa-plane"></i>
                                                </div>
                                                <div className="stop">
                                                    <p>Non-stop</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="arrivalTime">
                                                    <h2>12:00</h2>
                                                </div>
                                                <div className="arrivalPlace">
                                                    <h2>City A</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                    Rs. Book
                                </button>
                            </div>

                            </div>
                        ) : (
                            <div className="flex flex-col gap-[50px] justify-center items-center bg-[#6D99B5]">
                                <div className="flex justify-center  items-center bg-[#D9D9D9] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                            <h2>Aircraft Name (Code)</h2>
                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="timeOfDeparture">
                                                    <h2>10:00</h2>
                                                </div>
                                                <div className="startingPlace">
                                                    <h2>City A</h2>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="totalTime">
                                                    <p>2h</p>
                                                </div>
                                                <div className="arrow-icon">
                                                    <hr />
                                                    <i className="fa-solid fa-plane"></i>
                                                </div>
                                                <div className="stop">
                                                    <p>Non-stop</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="arrivalTime">
                                                    <h2>12:00</h2>
                                                </div>
                                                <div className="arrivalPlace">
                                                    <h2>City B</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                            Rs. Book
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center  items-center bg-[#D9D9D9] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                            <h2>Aircraft Name (Code)</h2>
                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="timeOfDeparture">
                                                    <h2>10:00</h2>
                                                </div>
                                                <div className="startingPlace">
                                                    <h2>City A</h2>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="totalTime">
                                                    <p>2h</p>
                                                </div>
                                                <div className="arrow-icon">
                                                    <hr />
                                                    <i className="fa-solid fa-plane"></i>
                                                </div>
                                                <div className="stop">
                                                    <p>Non-stop</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="arrivalTime">
                                                    <h2>12:00</h2>
                                                </div>
                                                <div className="arrivalPlace">
                                                    <h2>City B</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                            Rs. Book
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center  items-center bg-[#D9D9D9] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]">
                                            <h2>Aircraft Name (Code)</h2>
                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="timeOfDeparture">
                                                    <h2>10:00</h2>
                                                </div>
                                                <div className="startingPlace">
                                                    <h2>City A</h2>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="totalTime">
                                                    <p>2h</p>
                                                </div>
                                                <div className="arrow-icon">
                                                    <hr />
                                                    <i className="fa-solid fa-plane"></i>
                                                </div>
                                                <div className="stop">
                                                    <p>Non-stop</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center">
                                                <div className="arrivalTime">
                                                    <h2>12:00</h2>
                                                </div>
                                                <div className="arrivalPlace">
                                                    <h2>City B</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">
                                            Rs. Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

import { useTrip } from "./tripContext";

export const ShimmerUI = () => {
    const { typeOfTrip } = useTrip();
    return (
        <div className= "bg-[#CECCC8]">
            <div className="flights">
                <div className="flex justify-center items-center">
                    <div className="flex flex-column justify-center items-center bg-[#6D99B5] w-[90vw] max-w-[2400px] pt-[40px] pb-[40px] rounded-[5rem] opacity-60">
                        {typeOfTrip === "round" ? (
                            <div className="animate-pulse flex flex-col justify-evenly items-center " >
                                <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[80vw] h-[35vh] max-w-[2100px] max-h-[650px] font-bold text-[40px] mt-[2rem] rounded-[120px] ">
                                    <div className="flex gap-[15px] justify-center items-center flex-col">
                                        <div className="flex flex-row gap-[25px] items-center ">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[12vh] max-w-[1300px] max-h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[25px] items-center">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[12vh] max-w-[1300px] max-h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className=" w-[10vw] h-[15vh] max-w-[220px] max-h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer" />
                                </div>

                                <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[80vw] h-[35vh] max-w-[2100px] max-h-[650px] font-bold text-[40px] mt-[2rem] rounded-[120px] ">
                                    <div className="flex gap-[15px] justify-center items-center flex-col">
                                        <div className="flex flex-row gap-[25px] items-center ">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[12vh] max-w-[1300px] max-h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[25px] items-center">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[12vh] max-w-[1300px] max-h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className=" w-[10vw] h-[15vh] max-w-[220px] max-h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer" />
                                </div>


                            </div>
                        ) : (
                            <div className="animate-pulse flex flex-col gap-[50px] justify-center items-center bg-[#6D99B5]">
                                <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[80vw] h-[25vh] max-w-[2100px] max-h-[650px] font-bold text-[1rem] rounded-[5rem]  ">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[1rem] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[2rem] rounded-bl-[2rem]">

                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[12vh] max-w-[1300px] max-h-[220px]">
                                            <div className="flex flex-col justify-center items-center">

                                            </div>

                                            <div className="flex flex-col justify-center items-center">


                                            </div>

                                            <div className="flex flex-col justify-center items-center">

                                            </div>
                                        </div>

                                        <button className="w-[10vw] h-[12vh] max-w-[220px] max-h-[220px]  rounded-tr-[2rem] rounded-br-[2rem] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">

                                        </button>

                                    </div>
                                </div>
                                <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[80vw] h-[25vh] max-w-[2100px] max-h-[650px] font-bold text-[1rem] rounded-[5rem]  ">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[1rem] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[2rem] rounded-bl-[2rem]">

                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[12vh] max-w-[1300px] max-h-[220px]">
                                            <div className="flex flex-col justify-center items-center">

                                            </div>

                                            <div className="flex flex-col justify-center items-center">


                                            </div>

                                            <div className="flex flex-col justify-center items-center">

                                            </div>
                                        </div>

                                        <button className="w-[10vw] h-[12vh] max-w-[220px] max-h-[220px]  rounded-tr-[2rem] rounded-br-[2rem] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">

                                        </button>

                                    </div>
                                </div>
                                 <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[80vw] h-[25vh] max-w-[2100px] max-h-[650px] font-bold text-[1rem] rounded-[5rem]  ">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[1rem] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[15vw] h-[12vh] max-w-[300px] max-h-[220px] rounded-tl-[2rem] rounded-bl-[2rem]">

                                        </div>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[40vw] h-[12vh] max-w-[1300px] max-h-[220px]">
                                            <div className="flex flex-col justify-center items-center">

                                            </div>

                                            <div className="flex flex-col justify-center items-center">


                                            </div>

                                            <div className="flex flex-col justify-center items-center">

                                            </div>
                                        </div>

                                        <button className="w-[10vw] h-[12vh] max-w-[220px] max-h-[220px]  rounded-tr-[2rem] rounded-br-[2rem] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer">

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

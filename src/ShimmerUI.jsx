import { useTrip } from "./tripContext";

export const ShimmerUI = () => {
    const { typeOfTrip } = useTrip();
    return (
        <div>
            <div className="flights">
                <div className="flex justify-center items-center">
                    <div className="flex flex-column justify-center items-center bg-[#6D99B5] w-[2400px] pt-[40px] pb-[40px] rounded-[50px] mt-[10rem] opacity-60">
                        {typeOfTrip === "round" ? (
                            <div className="animate-pulse flex flex-col justify-evenly items-center " >
                                <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[2100px] h-[650px] font-bold text-[40px] mt-[2rem] rounded-[120px] ">
                                    <div className="flex gap-[20px] justify-center items-center flex-col">
                                        <div className="flex flex-row gap-[25px] items-center mt-[1rem]">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer"/>
                                </div>

                               <div className="flex justify-evenly items-center bg-[#D9D9D9] w-[2100px] h-[650px] font-bold text-[40px] mt-[2rem] rounded-[120px]">
                                    <div className="flex gap-[20px] justify-center items-center flex-col">
                                        <div className="flex flex-row gap-[25px] items-center mt-[1rem]">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                            <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]" />
                                            <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />

                                                <div className="flex flex-col justify-center items-center" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer"/>
                                </div>


                            </div>
                        ) : (
                            <div className="animate-pulse flex flex-col gap-[50px] justify-center items-center bg-[#6D99B5]">
                                <div className="flex justify-center  items-center bg-[#D9D9D9] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]"/>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center"/>

                                            <div className="flex flex-col justify-center items-center"/>

                                            <div className="flex flex-col justify-center items-center"/>
                                        </div>
                                        <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex justify-center  items-center bg-[#D9D9D9] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]"/>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center"/>

                                            <div className="flex flex-col justify-center items-center"/>

                                            <div className="flex flex-col justify-center items-center"/>
                                        </div>
                                        <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex justify-center  items-center bg-[#D9D9D9] w-[2100px] h-[350px] mt-[2rem] rounded-[120px]">
                                    <div className="flex flex-row gap-[25px] items-center mt-[1rem] font-bold text-[40px] ">
                                        <div className="flex justify-center items-center text-center bg-[#FFFFFF] w-[300px] h-[220px] rounded-tl-[50px] rounded-bl-[50px]"/>
                                        <div className="flex justify-evenly items-center bg-[#FFFFFF] w-[1300px] h-[220px]">
                                            <div className="flex flex-col justify-center items-center"/>

                                            <div className="flex flex-col justify-center items-center"/>

                                            <div className="flex flex-col justify-center items-center"/>
                                        </div>
                                        <button className="w-[220px] h-[220px]  rounded-tr-[50px] rounded-br-[50px] bg-[#6D99B5] text-[#FFFFFF] cursor-pointer"/>
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

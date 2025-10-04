import {useTrip} from "./tripContext";

const TypeOfTrip = () => {

    const {typeOfTrip, setTypeOfTrip} = useTrip();


    
    return (
        <div className="flex items-center gap-[1rem] md:gap-[2rem] ml-[1rem] my-[0.5rem] md:ml-[4rem] 2xl:ml-[5rem] 2xl:gap-[2rem] 2xl:my-[2rem] cursor-pointer">
            <div onClick = {()=>{setTypeOfTrip("round")}}className="flex flex-col gap-[5px] items-center">
                <h2 className="text-[0.8rem] md:text-[1rem] font-bold 2xl:text-[3rem]">Round Trip</h2>
                <hr className={`w-full h-[3px] border-0 transition-all duration-300 2xl:h-[5px] ${typeOfTrip === "round" ? "bg-[#6D99B5]" : "bg-transparent"}`} />
            </div>
            <div onClick = {()=>{setTypeOfTrip("oneWay")}} className="flex flex-col gap-[5px] items-center">
                <h2 className="text-[0.8rem] md:text-[1rem] font-bold 2xl:text-[3rem]">One-Way Trip</h2>
                <hr className={`w-full h-[3px] border-0 transition-all duration-300 2xl:h-[5px] ${typeOfTrip === "oneWay" ? "bg-[#6D99B5]" : "bg-transparent"}`} />

            </div>
        </div>
    )
};

export default TypeOfTrip;

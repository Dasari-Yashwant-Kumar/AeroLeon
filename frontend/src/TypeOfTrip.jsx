import {useTrip} from "./tripContext";

const TypeOfTrip = () => {

    const {typeOfTrip, setTypeOfTrip} = useTrip();


    
    return (
        <div className="flex items-center gap-[65px] mt-[5px] mb-[10px] ml-[120px] cursor-pointer">
            <div onClick = {()=>{setTypeOfTrip("round")}}className="flex flex-col gap-[15px] items-center mt-[1rem]">
                <h2 className="text-[45px] font-bold">Round Trip</h2>
                <hr className={`w-full h-[7px] border-0 transition-all duration-300 ${typeOfTrip === "round" ? "bg-[#6D99B5]" : "bg-transparent"}`} />
            </div>
            <div onClick = {()=>{setTypeOfTrip("oneWay")}} className="flex flex-col gap-[15px] items-center mt-[1rem]">
                <h2 className="text-[45px] font-bold">One-Way Trip</h2>
                <hr className={`w-full h-[7px] border-0 transition-all duration-300 ${typeOfTrip === "oneWay" ? "bg-[#6D99B5]" : "bg-transparent"}`} />

            </div>
        </div>
    )
};

export default TypeOfTrip;

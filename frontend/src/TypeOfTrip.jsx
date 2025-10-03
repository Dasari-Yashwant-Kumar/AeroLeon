import {useTrip} from "./tripContext";

const TypeOfTrip = () => {

    const {typeOfTrip, setTypeOfTrip} = useTrip();


    
    return (
        <div className="flex items-center gap-[2rem] ml-[4rem] my-[0.5rem] cursor-pointer">
            <div onClick = {()=>{setTypeOfTrip("round")}}className="flex flex-col gap-[5px] items-center">
                <h2 className="text-[1rem] font-bold">Round Trip</h2>
                <hr className={`w-full h-[3px] border-0 transition-all duration-300 ${typeOfTrip === "round" ? "bg-[#6D99B5]" : "bg-transparent"}`} />
            </div>
            <div onClick = {()=>{setTypeOfTrip("oneWay")}} className="flex flex-col gap-[5px] items-center">
                <h2 className="text-[1rem] font-bold">One-Way Trip</h2>
                <hr className={`w-full h-[3px] border-0 transition-all duration-300 ${typeOfTrip === "oneWay" ? "bg-[#6D99B5]" : "bg-transparent"}`} />

            </div>
        </div>
    )
};

export default TypeOfTrip;

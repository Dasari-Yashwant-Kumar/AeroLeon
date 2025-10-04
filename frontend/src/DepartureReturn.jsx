import { useTrip } from "./tripContext";
import { DayPicker } from "react-day-picker";
import { useState, useEffect, useRef } from "react";
import "react-day-picker/dist/style.css";

const DepartureReturn = () => {
  const { typeOfTrip, departureDate, setDeparture, returnDate, setReturnDate } = useTrip();
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);
  const departureRef = useRef(null);
  const returnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (departureRef.current && !departureRef.current.contains(event.target)) {
        setShowDeparturePicker(false);
      }
      if (returnRef.current && !returnRef.current.contains(event.target)) {
        setShowReturnPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "Select Date";
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="flex gap-[1rem] 2xl:gap-[4rem]">
      <div >
        <label htmlFor="departure" className="hidden md:block text-[1rem] 2xl:text-[2rem]">Departure</label>
        <div className="relative" ref={departureRef}>
          <input
            type="text"
            value={departureDate ?  formatDate(departureDate) :""}
            readOnly
            onClick={() => setShowDeparturePicker(!showDeparturePicker)}
            className="w-[25vw] h-[4vh] rounded-[5px] max-w-[18 rem] text-center max-h-[5rem] text-[0.8rem] md:placeholder-transparent md:w-[10vw] md:rounded-[10px] border-2 bg-white  2xl:text-[2rem]"
            placeholder="Departure date"
          />
          {showDeparturePicker && (
            <div className="absolute bottom-full left-0 z-50 mb-1 bg-white border border-gray-300 rounded-md shadow-md overflow-hidden" style={{ width: '250px', height: '250px' }}>
              <div className="p-1" style={{ transform: 'scale(0.8)', transformOrigin: 'top left', width: '250px', height: '250px' }}>
                <DayPicker
                  mode="single"
                  selected={departureDate}
                  onSelect={(date) => {
                    setDeparture(date);
                    setShowDeparturePicker(false);
                  }}
                  className="text-[0.8rem]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {typeOfTrip === "round" && (
        <div className="basic-details" id="return-section">
          <label htmlFor="return" className="hidden md:block text-[1rem] 2xl:text-[2rem]">Return</label>
          <div className="relative" ref={returnRef}>
            <input
              type="text"
              value={returnDate ? formatDate(returnDate): ""}
              readOnly
              onClick={() => setShowReturnPicker(!showReturnPicker)}
              className="w-[25vw] h-[4vh] rounded-[5px] text-center max-w-[18 rem] max-h-[5rem] text-[0.8rem] md:w-[10vw] md:placeholder-transparent md:rounded-[10px] pl-[0.5rem] border-2 bg-white  2xl:text-[2rem]"
              placeholder="Return date"
            />
            {showReturnPicker && (
              <div className="absolute bottom-full left-0 z-50 mb-2 bg-white border border-gray-300 rounded-md shadow-md overflow-hidden" style={{ width: '250px', height: '250px' }}>
                <div className="p-1" style={{ transform: 'scale(0.8)', transformOrigin: 'top left', width: '250px', height: '250px' }}>
                  <DayPicker
                    mode="single"
                    selected={returnDate}
                    onSelect={(date) => {
                      setReturnDate(date);
                      setShowReturnPicker(false);
                    }}
                    className="text-[0.8rem]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartureReturn;

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

  // Close popups when clicking outside
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
    <>
      <div className="basic-details">
        <label htmlFor="departure" className="text-[35px]">Departure</label>
        <div className="relative" ref={departureRef}>
          <input
            type="text"
            value={formatDate(departureDate)}
            readOnly
            onClick={() => setShowDeparturePicker(!showDeparturePicker)}
            className="w-[300px] h-[80px] text-[25px] rounded-[10px] px-[40px] border-3 bg-white" 
            placeholder="Select departure date"
          />
          {showDeparturePicker && (
            <div className="absolute bottom-full left-0 z-50 mb-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden" style={{ width: '450px', height: '450px' }}>
              <div className="p-4" style={{ transform: 'scale(1.3)', transformOrigin: 'top left', width: '350px', height: '350px' }}>
                <DayPicker
                  mode="single"
                  selected={departureDate}
                  onSelect={(date) => {
                    setDeparture(date);
                    setShowDeparturePicker(false);
                  }}
                  className="text-[18px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {typeOfTrip === "round" && (
        <div className="basic-details" id="return-section">
          <label htmlFor="return" className="text-[35px]">Return</label>
          <div className="relative" ref={returnRef}>
            <input
              type="text"
              value={formatDate(returnDate)}
              readOnly
              onClick={() => setShowReturnPicker(!showReturnPicker)}
              className="w-[300px] h-[80px] text-[25px] rounded-[10px] px-[40px] border-3 bg-white" 
              placeholder="Select return date"
            />
            {showReturnPicker && (
              <div className="absolute bottom-full left-0 z-50 mb-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden" style={{ width: '450px', height: '450px' }}>
                <div className="p-4" style={{ transform: 'scale(1.3)', transformOrigin: 'top left', width: '350px', height: '350px' }}>
                  <DayPicker
                    mode="single"
                    selected={returnDate}
                    onSelect={(date) => {
                      setReturnDate(date);
                      setShowReturnPicker(false);
                    }}
                    className="text-[18px]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DepartureReturn;

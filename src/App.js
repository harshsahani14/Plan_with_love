import "./App.css";
import Tours from "./componenets/Tours";
import data from "./data";
import { useState } from "react";

function App() {
  let [tours, setTours] = useState(data);

  function removeTour(id) {
    let newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center my-[300px]">
        <h3 className="font-bold text-[25px] ">No tours left</h3>

        <button
          className="w-[175px] font-medium mt-3 bg-slate-100 h-[45px] hover:bg-red-700 rounded-sm py-2 hover:text-white "
          onClick={() => setTours(data)}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-4 items-center ">
      <h2 className="text-center font-bold text-[35px] mt-5 py-3  border-dashed border-[#00008B] border-[7px] rounded-xl w-[475px]">
        Plan with Love
      </h2>

      <div >
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </div>
  );
}

export default App;

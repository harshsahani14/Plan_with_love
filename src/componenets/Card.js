import { useState } from "react";

function Card(props) {
  let [size, setSize] = useState(false);

  let information = props.info;
  let reduceddesc = `${information.substring(0, 200)}...`;

  let [desc, setDesc] = useState(reduceddesc);

  function descHandler() {
    size = !size;

    if (size == false) {
      setDesc(reduceddesc);
    } else {
      setDesc(props.info);
    }

    setSize(size);
  }

  function handleButton() {
    props.removeTour(props.id);
  }

  return (
    <div className="shadow-2xl rounded-md flex flex-col w-[400px] h-max items-center">
      <img
        src={props.image}
        className="w-[400px] h-[270px] px-2 pt-3"
      ></img>

      <div className='px-2'>
        <h3 className="text-green-600 font-bold text-[17px] mt-3 ml-1">
          ₹{props.price}
        </h3>
        <h3 className="font-bold text-[18px] mb-1 ml-1"> {props.name} </h3>

        <span className="font-medium text-[15px] leading-4 text-center">{desc}</span>
        <span
          onClick={descHandler}
          className="font-medium text-[#35c1daf9] cursor-pointer "
        >
          {size ? `show less` : `Read More`}
        </span>
      </div>

      <button
        onClick={handleButton}
        className="w-[230px] rounded-md px-6 py-2 font-bold hover:bg-red-700 bg-red-100 hover:text-white mt-7 mb-5"
      >
        
        Not Interested
      </button>
    </div>
  );
}

export default Card;

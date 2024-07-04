import Card from "./Card";
function Tours(props) {
  return (
    <div className='flex justify-center  flex-wrap max-w-[1300px] mx-auto gap-6 mt-[4rem] mb-6'>
      {props.tours.map((tour) => {
        return <Card {...tour} removeTour={props.removeTour}></Card>;
      })}
    </div>
  );
}

export default Tours;

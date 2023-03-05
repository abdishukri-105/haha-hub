
import joker from "../images/laugh.jpg"

const Home = () => {
  return (
    <div className="overflow-hidden">
     
        <div
          className=" "
          // style={{ backgroundImage: `url(${joker})` }}
        >
          <div className="text-3xl text-center mt-14 text-teal-500 w-2/3 font-bold">
            <h1>Prepare yourself for some side-splitting, gut-busting, and knee-slapping laughs!</h1>
          </div>
        </div>
       
        <div
          className="bg-cover bg-center flex flex-col items-center justify-center text-white min-h-screen"
          style={{ backgroundImage: `url(${joker})` }}
        >
         
        </div>
      
    </div>
  );
};

export default Home;

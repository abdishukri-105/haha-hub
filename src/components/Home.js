import joker from "../images/laugh.jpg"

const Home = () => {
  return (
    <div className="bg-contain bg-no-repeat bg-center h-screen" style={{ backgroundImage: `url(${joker})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
    <div className="flex items-center justify-center">
      <div className="text-3xl text-center mt-14 text-teal-500 w-2/3 font-bold">
        <h1>Prepare yourself for some side-splitting, gut-busting, and knee-slapping laughs!</h1>
      </div>
    </div>  
  </div>
  
  
  );
};

export default Home;

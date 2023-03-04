import Login from "./Login"
import joker from "../images/joker.jpg"


const Home = ({setIsAuthenticated, isAuthenticated,handleLogin}) => {

    return ( 
      <div>
       {  isAuthenticated ?   <img src={joker} alt="joker" /> :
        <div className=" bg-cover bg-center flex flex-col justify-cente items-center text-white"  >
          <Login  setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>
        </div> 
        }
      </div>
     )
}

 
export default Home;

// style={{ backgroundImage: `url(${joker})` }}
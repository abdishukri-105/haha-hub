import Login from "./Login"



const Home = ({setIsAuthenticated,handleLogin}) => {

    return ( 
      <div>
  
        <div className=" bg-cover bg-center flex flex-col justify-cente items-center text-white"  >
          <Login  setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>
        </div>
       
      </div>
     )
}

 
export default Home;

// style={{ backgroundImage: `url(${joker})` }}
import Login from "./Login"



const Home = ({setIsAuthenticated}) => {

 

    return ( 
      <div>
  
        <div className=" bg-cover bg-center flex flex-col justify-cente items-center text-white"  >
          <Login  setIsAuthenticated={setIsAuthenticated}/>
        </div>

        
           
           {/* <Register /> */}
      </div>
     )
}

 
export default Home;

// style={{ backgroundImage: `url(${joker})` }}
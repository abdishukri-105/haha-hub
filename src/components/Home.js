import Login from "./Login"

import { useNavigate} from "react-router-dom"

const Home = ({setIsAuthenticated}) => {

    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/allmemes')
       console.log("go to home now")
       setIsAuthenticated(true)
    }

    return ( 
      <div>
  
        <div className=" bg-cover bg-center flex flex-col justify-cente items-center text-white"  >
          <Login handleSubmit={handleSubmit} />
        </div>

        
           
           {/* <Register /> */}
      </div>
     )
}

 
export default Home;

// style={{ backgroundImage: `url(${joker})` }}
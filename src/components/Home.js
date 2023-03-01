import Login from "./Login"
import Register from "./Register"


import joker from "../images/joker.jpg"
const Home = () => {

    return ( 
      <div>
  
        <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${joker})` }}>
            <h1 className="text-4xl font-bold">haha why so serious ... joker</h1>
            <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold">Get Started</button>
        </div>

        
           {/* <Login />
           <Register /> */}
      </div>
     )
}

 
export default Home;
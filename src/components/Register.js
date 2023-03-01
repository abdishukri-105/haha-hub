import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom"
const Register = ({setIsAuthenticated}) => { 

    
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/allmemes')
       console.log("go to home now")
       setIsAuthenticated(true)
    }
    return ( 
    <div className="flex justify-center items-center ">
        <form class="w-full max-w-sm bg-slate-300 shodow-lg rounded-xl p-5 mt-20 "  onSubmit={handleSubmit}>
            <h1 className="text-2xl text-gray-900 text-center mb-6  font-bold">Register to Laugh</h1>

            <div class="md:flex md:items-center mb-6">   
                <div class="md:w-1/3">
                    <label class="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                    Username
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="inline-full-name" type="text" placeholder="Jane Doe"/>
                </div>
            </div>
    
            <div class="md:flex md:items-center mb-6">   
                <div class="md:w-1/3">
                    <label class="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                      email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="inline-full-name" type="text" placeholder="Jane Doe"/>
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Password
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="inline-password" type="password" placeholder="******************"/>
            </div>
            </div>
        
            <div class="md:flex md:items-center mb-5">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
                <button  class="shadow bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Register
                </button>
            </div>
        
            </div>
          
    </form>
  </div>
     )
}
 
export default Register;
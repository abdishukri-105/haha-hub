import {  Link } from "react-router-dom"

const Navbar = ({isAuthenticated, handleLogout}) => {

    return ( 
        
        <nav className="bg-green-700 flex items-center justify-around flex-wrap p-3">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link to="/"className="font-semibold text-2xl tracking-tight">Haha hub</Link>
        </div>
        <div className="flex items-center flex-shrink-0 text-gray-800 font-bold justify-center">
          <Link to="/"  exact className=" ml-5">Home</Link>
          {isAuthenticated? ( 
              <>
                <Link to="/my-memes"  exact className="ml-5">My memes</Link>
                <Link to="/all-memes"  exact className="ml-5">All memes</Link>
                <Link  onClick={handleLogout}  exact className="ml-5">Logout</Link>
              </>
            ):(
              <Link to="/register" className="ml-8">Register</Link>
            )
          }
{/*         
          <form className="mr-4 flex">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 rounded py-2 px-4  text-gray-800 focus:outline-none focus:bg-white focus:shadow-outline mr-2"
            />
            <button type="submit" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </form> */}
        </div>
        {/* <div className="flex items-center flex-shrink-0 text-gray-800 font-bold justify-end">
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div> */}
      </nav>
      
);
}
 
export default Navbar;


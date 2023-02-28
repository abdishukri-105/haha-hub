const Navbar = () => {

    
    return ( 
        <nav className="bg-teal-500 flex items-center justify-between flex-wrap p-3">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <span className="font-semibold text-2xl tracking-tight">Haha hub</span>
        </div>
        <div className="flex items-center flex-shrink-0 text-gray-800 font-bold justify-center">
          <a href="#" className="mr-4">
            My Memes
          </a>
          <a href="#" className="mr-4">
            All Memes
          </a>
          <form className="mr-4 flex">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 rounded py-2 px-4  text-gray-800 focus:outline-none focus:bg-white focus:shadow-outline mr-2"
            />
            <button type="submit" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center flex-shrink-0 text-gray-800 font-bold justify-end">
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </nav>
      
);
}
 
export default Navbar;
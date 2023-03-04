const Search = ({handleSearchChange}) => {
    return (
        <form className="relative w-2/3 mt-6 ml-64">
        <input
          name="search"
          type="text"
          placeholder="Search meme ....."
          className="bg-slate-100 rounded py-5 px-12 w-full text-gray-900 shadow-xl focus:outline-none focus:bg-slate-200 focus:shadow-outline mr-2"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <ion-icon name="search"></ion-icon>
         
        </span>
      </form>
      
      
      
      );
}
 
export default Search;
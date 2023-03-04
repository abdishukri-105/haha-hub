const Search = ({handleSearchChange}) => {
    return (
        <form className=" flex w-1/3 mt-10 ml-96   ">
          
        <input
          name="search"
          type="text"
          placeholder="Search for meme by title"
          className="bg-slate-300 rounded py-2 px-4 w-full text-gray-900 focus:outline-none focus:bg-slate-200 focus:shadow-outline mr-2"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      
      </form> 
      );
}
 
export default Search;
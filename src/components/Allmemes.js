const Allmemes = ({ memes }) => {
   const allmemes = memes.map((meme) => {
     const created = new Date(meme.created_at);
     const now = new Date();
     const diffInMs = now.getTime() - created.getTime();
     let formattedDate;
     if (diffInMs < 1000 * 60 * 60) {
       const diffInMin = Math.floor(diffInMs / (1000 * 60));
       formattedDate = `${diffInMin} min ago`;
     } else if (diffInMs < 1000 * 60 * 60 * 24) {
       const diffInHrs = Math.floor(diffInMs / (1000 * 60 * 60));
       formattedDate = `${diffInHrs} hrs ago`;
     } else {
       const diffInDays = Math.floor(diffInMs / (1000 * 3600 * 24));
       formattedDate = `${diffInDays} days ago`;
     }
 
     return (
       <div
         key={meme.id}
         className="text-white bg-slate-200 p-4 mt-5 border w-2/4 ml-80 rounded-xl shadow"
       >
         <div className="flex border mb-1 md:border-slate-400 md:border-b-1 md:border-t-0 md:border-r-0 md:border-l-0  ">
            {meme.user  && <p className="mr-4  text-teal-500 font-bold "> <span className="text-orange-600">created by:</span>  {meme.user.username}</p>}
            <p className="text-pink-500 mb-1">{formattedDate}</p>
         </div>
         <p className="">
           <span className="text-gray-900 font-bold"> "{meme.title}" </span>{" "}
          
         </p>
         <p className="">
           <span className="text-gray-900 font-bold">"{meme.message}"</span>
           
         </p>
         
       </div>
     );
   });
 
   return <div className=" mt-10 pb-20 ">{allmemes}</div>;
 };
 
 export default Allmemes;
 
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
         className="text-white p-4 mt-5 bg-slate-400 border w-2/4 ml-80 rounded-xl shadow"
       >
         <div className="flex border mb-1 md:border-slate-300 md:border-b-2 md:border-t-0 md:border-r-0 md:border-l-0  ">
            {meme.user && <p className="mr-4  text-yellow-500 font-bold">{meme.user.username}</p>}
            <p className="text-yellow-200 mb-2">{formattedDate}</p>
         </div>
         <p className="">
           <span className="text-gray-900 font-bold">title: </span>{" "}
           {meme.title}
         </p>
         <p className="">
           <span className="text-gray-900 font-bold">punchline: </span>
           {meme.message}
         </p>
         
       </div>
     );
   });
 
   return <div className=" mt-10 pb-20 bg-slate-600">{allmemes}</div>;
 };
 
 export default Allmemes;
 
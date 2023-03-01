import { useState, useEffect } from "react";

const Allmemes = () => {

    const [memes, setMemes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://127.0.0.1:9292/memes');
          const jsonData = await response.json();
          console.log(jsonData)
          setMemes(jsonData);
        };
    
        fetchData();
      }, []);
      
      const allmemes = memes.map(meme => {
        return <div key={meme.id} className = "text-white p-4 mt-5 bg-slate-400 border w-2/4 ml-80  rounded-xl shadow">
             <p className=""> <span className="text-gray-900 font-bold">title: </span> {meme.title} </p>
             <p className="">  <span className="text-gray-900 font-bold">punchline: </span>{meme.message} </p>
            </div>
      })

    return ( 
        <div className=" mt-10 pb-20 bg-slate-600">
           {allmemes}
        </div>
     );
}
 
export default Allmemes;
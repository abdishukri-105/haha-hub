import Addmeme from "./Addmeme";
import {useState, useEffect} from "react";

const Mymeme = () => {
  const [myMemes, setMyMemes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:9292/users/1');
      const jsonData = await response.json();
      console.log(jsonData)
      setMyMemes(jsonData);
    };

    fetchData();
  }, []);


  const allMemes = myMemes.map(meme => {
    return <div key={meme.id} className = "text-white p-4 mt-5 bg-slate-400 border ml-20  rounded-xl shadow">
         <p className=""> <span className="text-gray-900 font-bold">title: </span> {meme.title} </p>
         <p className="">  <span className="text-gray-900 font-bold">punchline: </span>{meme.message} </p>
        </div>
  })


    return (  
      <div className="grid grid-cols-2">
       <div className=" ">
         {allMemes}
       </div>
       <Addmeme />
       </div>
    
    );
}
 
export default Mymeme;
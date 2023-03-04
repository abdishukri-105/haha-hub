import Addmeme from "./Addmeme";
import Delete from "./Delete";
// import { useState } from "react";

const Mymeme = ({userId, myMemes, handleDeleteMessage, handleAddMemes, handleUpdateMeme }) => {
  // const [isEditing, setIsEditing] = useState(false)

  // function handleUpdateMessage(updatedMeme) {
  //   setIsEditing(false);
  //   handleUpdateMeme(updatedMeme);
  // }

  console.log(myMemes);

const allMemes = myMemes
    ? myMemes.map((meme) => (
        <div
          key={meme.id}
          className="text-white p-4 mt-5 bg-slate-400 border ml-20 rounded-xl shadow"
        >
          <p className="">
            {" "}
            <span className="text-gray-900 font-bold">title: </span>{" "}
            {meme.title}{" "}
          </p>
          <p className="">
            {" "}
            <span className="text-gray-900 font-bold">punchline: </span>
            {meme.message}{" "}
          </p>
          <Delete
            id={meme.id}
            myMemes={myMemes}
            handleDeleteMessage={handleDeleteMessage}
          />
        </div>
      ))
    : null;

  return (
    <div className="grid grid-cols-2">
      <div className=" ">{allMemes}</div>
      <Addmeme handleAddMemes={handleAddMemes} userId={userId} />
    </div>
  );
};

export default Mymeme;

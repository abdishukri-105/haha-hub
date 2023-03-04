

const Delete = ({ userId, id, handleDeleteMemes}) => {

function handleDeleteClick() {
    fetch(`http://localhost:9292/memes/${id}/users/${userId}`, {
      method: "DELETE",
    });
    console.log("delete called")
    handleDeleteMemes(id);
  }

    return (  
        <button onClick={handleDeleteClick}
            className="shadow bg-red-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full">
            delete
        </button>
    );
}
 
export default Delete;
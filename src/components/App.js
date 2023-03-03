import { Routes , Route, useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Home from "./Home"
import Mymeme from "./Mymemes"
import Register from './Register'
import Allmemes from './Allmemes'
import Mymemes from './Mymemes'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [memes, setMemes] = useState([])
  const [myMemes, setMyMemes] = useState([])
  
  const navigate = useNavigate()

  console.log(memes)

// login user
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    fetch('http://127.0.0.1:9292/login', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        setIsAuthenticated(true);
        setUsername(data.username); // set the username state variable
        navigate('/allmemes');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  

  const handleLogout = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setIsAuthenticated(false);
        navigate('/');
      } else {
        throw new Error('Failed to logout');
      }
    })
    .catch(error => console.error(error));
  };
  

  // fetch all memes
  useEffect(() => {
    fetch("http://localhost:9292/memes")
      .then((r) => r.json())
      .then((response) => setMemes(response.memes));
  }, []);

// //  fetch memes of specific user
//     useEffect(() => {
//       fetch("http://localhost:9292/users/4")
//         .then((r) => r.json())
//         .then((myMemes) => setMyMemes(myMemes));
//     }, []);

// useEffect(() => {
//   fetch('http://localhost:9292/memes')
//     .then(response => response.json())
//     .then(memes => {
//       console.log("from fetch body",memes);
//       setMemes(memes);
//     })
//     .catch(error => console.log(error));
// }, []);

  function handleDeleteMemes(id) {
    const updatedmemes = myMemes.filter((myMemes) => myMemes.id !== id);
    console.log("update delete message")
    setMyMemes(updatedmemes);
  }

  function handleAddMemes(newMyMemes) {
    setMyMemes([...myMemes, newMyMemes]);
  }

  function handleUpdateMeme(updatedMemeObj) {
    const updatedMemes = Mymemes.map((message) => {
      if (message.id === updatedMemeObj.id) {
        return updatedMemeObj;
      } else {
        return message;
      }
    });
    setMyMemes(updatedMemes);
  }

  return (
    <div className="bg-gray-600 h-screen">
      
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} username={username} />
        
        <Routes>
           <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}  isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>} />
           <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}  />} />
           {isAuthenticated && (
            <>
              {/* <Route path="/shelf" element={<Mymeme />} /> */}
              <Route path="/allmemes" element={<Allmemes memes={memes}/>} />
              <Route path="/mymemes" element={<Mymemes myMemes={myMemes} 
                                                handleDeleteMemes={handleDeleteMemes}
                                                handleAddMemes={handleAddMemes} 
                                                handleUpdateMeme={handleUpdateMeme}
              />} />
              {/* <Route path="/search" element={<Search results={results} searchInput={searchInput} setSearchInput={setSearchInput} handleSubmit={handleSubmit} isLoading = {isLoading} addToShelf={addToShelf}/>} /> */}
            </>
           )}
        </Routes>
   </div>
  );
}

export default App;

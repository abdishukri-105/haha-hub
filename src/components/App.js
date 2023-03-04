import { Routes , Route, useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Home from "./Home"
import Register from './Register'
import Allmemes from './Allmemes'
import Mymemes from './Mymemes'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('');
  const [memes, setMemes] = useState([])
  const [myMemes, setMyMemes] = useState([])
  
  const navigate = useNavigate()

  console.log(myMemes)

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
        setUsername(data.username); 
        setUserId(data.userId);
        navigate('/allmemes');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  console.log(userId)

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

//  fetch memes of authenticated user
useEffect(() => {
  fetch(`http://localhost:9292/my_memes/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setMyMemes(data.memes);
    })
    .catch((error) => console.error(error));
}, [userId]);

const renderMymemes = () => {
  if (isAuthenticated) {
    return <Mymemes
                userId={userId}
                myMemes={myMemes}
                setMyMemes={setMyMemes}
                handleDeleteMemes={handleDeleteMemes}
                handleAddMemes={handleAddMemes} 
                handleUpdateMeme={handleUpdateMeme} 
            />
  } else {
    navigate('/login');
  }
}


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
    <div className="">
      
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} username={username} />
        
        <Routes>
           <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}  isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>} />
           <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}  />} />
           {isAuthenticated && (
            <>
              <Route path="/allmemes" element={<Allmemes memes={memes}/>} />
              <Route path="/mymemes" element={renderMymemes()}/>
            </>
           )}
        </Routes>
   </div>
  );
}

export default App;

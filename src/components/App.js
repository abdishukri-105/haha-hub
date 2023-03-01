import { Routes , Route, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from "./Navbar"
import Home from "./Home"
import Mymeme from "./Mymemes"
import Register from './Register'
import Allmemes from './Allmemes'
import Mymemes from './Mymemes'

function App() {
  // const [searchInput, setSearchInput] = useState('');
  // const [results, setResults] = useState([]);
  // const [shelf, setShelf] = useState([]);
  
  // const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if(searchInput === '') return;
  //   const response = await fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=books+${searchInput}&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`
  //   );
  //   const data = await response.json();
  //   setResults(data.items);
  // }

  
  
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    setIsAuthenticated(false)
    navigate('/')
  }



  return (
    <div className="bg-slate-600 h-screen">
      
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}  />
        
        <Routes>
           <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
           <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}  />} />
           {isAuthenticated && (
            <>
              <Route path="/shelf" element={<Mymeme />} />
              <Route path="/allmemes" element={<Allmemes />} />
              <Route path="/mymemes" element={<Mymemes />} />
              {/* <Route path="/search" element={<Search results={results} searchInput={searchInput} setSearchInput={setSearchInput} handleSubmit={handleSubmit} isLoading = {isLoading} addToShelf={addToShelf}/>} /> */}
            </>
           )}
        </Routes>
   </div>
  );
}

export default App;

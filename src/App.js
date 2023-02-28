import Navbar from "./components/Navbar"
import Meme from "./components/Meme"
import Login from "./components/Login"
import Register from "./components/Register"
function App() {
  return (
    <div className="App">
        <Navbar />
        <Meme />
        <Login />
        <Register />
   </div>
  );
}

export default App;

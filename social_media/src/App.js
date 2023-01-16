import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";

function App() {
     const {user}=useSelector((prevState)=> prevState) || {user:null}

     return( 
          <Router>
               <Routes>
                    <Route exact path="/"
                    element={user? <Home /> : <Register />} />
                      <Route path="/login"
                    element={user? <Navigate to="/" /> : <Login />} />
                      <Route path="/register"
                    element={user? <Navigate to="/"/> : <Register />} />
                      <Route path="/profile/:username"
                    element={<Profile />} />
               </Routes>
          </Router>
     )
}

export default App;

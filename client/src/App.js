import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./home/HomePage";
import Login from "./userAuth/Login";
import Signup from "./userAuth/Signup";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/userState"
import {Route, Routes, useNavigate} from "react-router-dom"

function App() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok){
        response.json().then((user) => {
          setUser(user)
          navigate("/")
        })
      } else{
        navigate("/login")
      }
    })
  }, [])

  return (
    <div>
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

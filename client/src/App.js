import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./home/HomePage";
import Login from "./userAuth/Login";
import Signup from "./userAuth/Signup";
import CampaignPage from './campaign/CampaignPage';
import CreateCampaignPage from './campaign/CreateCampaignPage';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/userState"
import {Route, Routes, useNavigate} from "react-router-dom"
import CreateEncounterPage from './encounter/CreateEncounterPage';

function App() {
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok){
        response.json().then((user) => {
          setUser(user)
        })
      } else{
        navigate("/login")
      }
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/createencounter" element={<CreateEncounterPage/>}/>
        <Route path="/campaigns/:id" element={<CampaignPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/createcampaign" element={<CreateCampaignPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

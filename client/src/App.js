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
import EditCampaignPage from './campaign/EditCampaignPage';

function App() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok){
        response.json().then((user) => {
          setUser(user)
          navigate("/home")
        })
      } else{
        navigate("/login")
      }
    })
  }, [])

  return (
    <div>
    {/* {user.id === 0 ? <h1>Loading...</h1> : null} */}
      <Routes>
        <Route path="/createencounter" element={<CreateEncounterPage/>}/>
        <Route path="/campaigns/:id" element={<CampaignPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/createcampaign" element={<CreateCampaignPage/>}/>
        <Route path="/editcampaign" element={<EditCampaignPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

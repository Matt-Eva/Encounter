import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import HomePage from "./home/HomePage";
import Login from "./userAuth/Login";
import Signup from "./userAuth/Signup";
import CampaignPage from './campaign/CampaignPage';
import CreateCampaignPage from './campaign/CreateCampaignPage';
import EncounterPage from "./encounter/EncounterPage"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/userState"
import {Route, Routes, useNavigate} from "react-router-dom"
import CreateEncounterPage from './encounter/CreateEncounterPage';
import EditCampaignPage from './campaign/EditCampaignPage';
import EditEncounterPage from './encounter/EditEncounterPage';
import EncounterNpcPage from "./npc/EncounterNpcPage";
import EncounterMonsterPage from './monster/EncounterMonsterPage';
import EncounterItemPage from './item/EncounterItemPage';
import EncounterLocationPage from './location/EncounterLocationPage';

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
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/campaign/:id" element={<CampaignPage/>}/>
        <Route path="/createcampaign" element={<CreateCampaignPage/>}/>
        <Route path="/editcampaign/:id" element={<EditCampaignPage/>}/>
        <Route path="encounter/:id" element={<EncounterPage/>}/>
        <Route exact path="/createencounter" element={<CreateEncounterPage/>}/>
        <Route path="/editencounter" element={<EditEncounterPage/>}/>
        <Route path="/createencounterlocation/:id" element={<EncounterLocationPage/>}/>
        <Route path="/createencounteritem/:id" element={<EncounterItemPage/>}/>
        <Route path="/createencounternpc/:id" element={<EncounterNpcPage/>}/>
        <Route path="/createencountermonster/:id" element={<EncounterMonsterPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

import {Form, Container, Row, Col} from "react-bootstrap"
import {UserContext} from "../context/userState";
import { useContext, useState } from "react";
import LogoutButton from "../userAuth/LogoutButton";
import Icon from "../home/Icon";
import CreateEncounterForm from "./CreateEncounterForm";
import { SelectedCampaignContext } from "../context/selectedCampaignState";
import { EncountersContext } from "../context/encountersState";
import { useNavigate } from "react-router-dom"

import parchmentBackground from "../assets/parchmentBackground.jpg"

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh",
    minWidth: "100%"
}


function CreateEncounterPage(){
    const {user} = useContext(UserContext)
    const {selectedCampaign} = useContext(SelectedCampaignContext)
    const {encounters, setEncounters} = useContext(EncountersContext)
    const [newEncounter, setNewEncounter] = useState({
        id: "",
        campaignId: selectedCampaign.id,
        name: "",
        description: "",
        image: "",
        notes: "",
        status: "active"
    }) 
    const navigate = useNavigate()

    function handleChange(e){
        setNewEncounter({
            ...newEncounter,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, obj) {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: "",
                campaign_id: selectedCampaign.id,
                name: obj.name,
                description: obj.description,
                image: obj.image,
                notes: obj.notes,
                status: obj.status
            })
        }

        fetch("/encs", configObj)
        .then(r => r.json())
        .then(data => {
            setEncounters([...encounters, data])
            setNewEncounter({
                id: "",
                campaignId: selectedCampaign.id,
                name: "",
                description: "",
                image: "",
                notes: "",
                status: ""
            })
            navigate(`/campaign/${selectedCampaign.id}`)
        })
    }

    return(
        <Container style={backgroundImageStyle}>
            <Row>
                <Col>
                    <Icon/>
                </Col>
                <Col xs={6} style={{"textAlign": "center"}}>
                   <h1 style={{"cursor": "pointer"}} onClick={() =>navigate(`/campaign/${selectedCampaign.id}`)}>{selectedCampaign.name}:</h1>
                   <h2>Create a New Encounter</h2>
                </Col>
                <Col style={{"textAlign": "right"}}>
                    <LogoutButton/>
                </Col> 
            </Row>
            <Row>
                <CreateEncounterForm handleSubmit={handleSubmit} handleChange={handleChange} newEncounter={newEncounter}/>
            </Row>
        </Container>
    );
}

export default CreateEncounterPage;
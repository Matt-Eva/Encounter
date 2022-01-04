import LogoutButton from "../userAuth/LogoutButton";
import {Row, Container, Col} from "react-bootstrap";
import {UserContext} from "../context/userState";
import { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import EncounterCard from "../encounter/EncounterCard"




function CampaignPage(){
    const {user} = useContext(UserContext)
    const [campaign, setCampaign] = useState({})
    const [encounters, setEncounters] = useState([])
    const campaignId = useParams().id

    useEffect(() => {
        fetch(`/campaigns/${campaignId}`)
        .then(r => r.json())
        .then(campaignData => {
            setCampaign(campaignData)
            let encs = campaignData.encs
            let newEncsData = encs.map(enc => enc)
            setEncounters(newEncsData)
        })
    },[])


    return(
        <Container className="mw-100">
            <Row>
                <Col>
                    Icon
                    Menu
                </Col>
                <Col>
                   Encounter<br/>
                   Welcome {user.dm_name}
                </Col>
                <Col>
                    <LogoutButton/>
                </Col> 
            </Row>
            <Row>
                <Col sm={4}>
                    <h2>{campaign.name}</h2>
                    <h5>{campaign.description}</h5>
                </Col>
                <Col>
                    <h5>Status: {campaign.status}</h5>
                </Col>
                <Col sm={6} >
                    <img src={campaign.image} alt="picture of campaign image" className="img-fluid"/>
                </Col>
            </Row>
            <Row>
                <EncounterCard encounters={encounters}/>
            </Row>
        </Container>
    );
}

export default CampaignPage;
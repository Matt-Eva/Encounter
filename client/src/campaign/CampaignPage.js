import LogoutButton from "../userAuth/LogoutButton";
import {Row, Container, Col} from "react-bootstrap";
import {UserContext} from "../context/userState";
import { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom"



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
        <Container>
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
                <Col>
                    <h2></h2>
                </Col>
            </Row>
        </Container>
    );
}

export default CampaignPage;
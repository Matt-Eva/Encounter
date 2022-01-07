import { Container, Row, Col, Button } from "react-bootstrap"
import EditEncounterForm from "./EditEncounterForm";
import LogoutButton from "../userAuth/LogoutButton";
import Icon from "../home/Icon";
import {useContext} from "react"
import {EditEncounterContext} from "../context/editEncounterState";
import { SelectedCampaignContext } from "../context/selectedCampaignState";
import {useNavigate} from "react-router-dom"
import parchmentBackground from "../assets/parchmentBackground.jpg";

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: "10px",
    minHeight: "100vh",
    minWidth: "100%"
}

function EditEncounterPage(){
    const navigate = useNavigate()
    const {editEncounter} = useContext(EditEncounterContext)
    const {selectedCampaign} = useContext(SelectedCampaignContext)
    console.log(editEncounter)
    return(
        <Container style={backgroundImageStyle}>
            <Row >
                <Col>
                    <Icon/>
                    <br />
                    <br />
                    <Button variant="danger" onClick={() => navigate(`/campaign/${selectedCampaign.id}`)}>Cancel</Button>
                    <br/>
                    <br/>
                </Col>
                <Col xs={6} style={{"textAlign": "center"}}>
                    <h1>Edit "{editEncounter.name}"</h1>
                </Col>
                <Col style={{"text-align": "right"}}>
                    <LogoutButton/>
                </Col>  
            </Row>
            <Row>
                <EditEncounterForm encounter={editEncounter}/>
            </Row>
        </Container>
    )
}

export default EditEncounterPage;
import CreateEncounterNpcForm from "./CreateEncounterNpcForm";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState"
import parchmentBackground from "../assets/parchmentBackground.jpg"
import LogoutButton from "../userAuth/LogoutButton";
import {Button, Container, Row, Col} from "react-bootstrap"

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh",
}

function EncounterNpcPage(){
    const {selectedEncounter} = useContext(SelectedEncounterContext)
    return(
        <Container style={backgroundImageStyle} className="mw-100">
        <Row>
            <Col>
                <Link to={`/encounter/${selectedEncounter.id}`} style={{"textDecoration": "none", "color": "black"}}><h4>Return to {selectedEncounter.name}</h4></Link>
            </Col>
            <Col>
                <h1>Create a New NPC!</h1>
            </Col>
            <Col style={{"textAlign": "right"}}>
                <LogoutButton/>
            </Col>
        </Row>
        <CreateEncounterNpcForm/>
    </Container>
    );
}

export default EncounterNpcPage;
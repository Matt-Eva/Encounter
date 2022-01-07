import {Link} from "react-router-dom"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState"
import CreateEncounterMonsterForm from "./CreateEncounterMonsterForm";
import parchmentBackground from "../assets/parchmentBackground.jpg"
import LogoutButton from "../userAuth/LogoutButton";
import {Button, Container, Row, Col} from "react-bootstrap"

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh",
}

function EncounterMonsterPage(){
    const {selectedEncounter} = useContext(SelectedEncounterContext)
    return(
        <Container style={backgroundImageStyle} className="mw-100">
        <Row>
            <Col>
                <Link to={`/encounter/${selectedEncounter.id}`} style={{"textDecoration": "none", "color": "black"}}><h4>Return to {selectedEncounter.name}</h4></Link>
            </Col>
            <Col>
                <h1>Create a New Monster!</h1>
            </Col>
            <Col style={{"textAlign": "right"}}>
                <LogoutButton/>
            </Col>
        </Row>
        <CreateEncounterMonsterForm/>
    </Container>
    );
}

export default EncounterMonsterPage;
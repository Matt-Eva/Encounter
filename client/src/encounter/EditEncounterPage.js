import { Container, Row, Col } from "react-bootstrap"
import EditEncounterForm from "./EditEncounterForm";
import LogoutButton from "../userAuth/LogoutButton";
import HomePageButton from "../home/HomePageButton";
import {useContext} from "react"
import {EditEncounterContext} from "../context/editEncounterState";

function EditEncounterPage(){
    const {editEncounter} = useContext(EditEncounterContext)
    console.log(editEncounter)
    return(
        <Container>
            <Row>
                <Col>
                    <HomePageButton/>
                </Col>
                <Col>
                <h1>Edit: {editEncounter.name}</h1>
                </Col>
                <Col>
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
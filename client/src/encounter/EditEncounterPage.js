import { Container, Row, Col } from "react-bootstrap"
import EditEncounterForm from "./EditEncounterForm";
import LogoutButton from "../userAuth/LogoutButton";
import HomePageButton from "../home/HomePageButton";

function EditEncounterPage(){
    return(
        <Container>
            <Row>
                <Col>
                    <HomePageButton/>
                </Col>
                <Col>
                    <LogoutButton/>
                </Col>  
            </Row>
            <Row>
                <EditEncounterForm/>
            </Row>
        </Container>
    )
}

export default EditEncounterPage;
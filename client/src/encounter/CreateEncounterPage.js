import {Form, Button,Container, Row, Col} from "react-bootstrap"
import {UserContext} from "../context/userState";
import { useContext, useState } from "react";
import LogoutButton from "../userAuth/LogoutButton";


function CreateEncounterPage(){
    const {user} = useContext(UserContext)

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
                <Form style={{"width": "23rem"}}>
                    <Form.Group>
                        <Form.Label>Encounter Title:</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Choose your encounter's title!" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" name="description" placeholder="A brief description of the encounter." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image:</Form.Label>
                        <Form.Control type="image" name="location" placeholder="Where does this encounter take place?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control type="text" name="notes" placeholder="Any checks/things to note?" />
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
}

export default CreateEncounterPage;
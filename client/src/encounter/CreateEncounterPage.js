import {Form, Container, Row, Col} from "react-bootstrap"
import {UserContext} from "../context/userState";
import { useContext, useState } from "react";
import LogoutButton from "../userAuth/LogoutButton";
import { SelectedCampaignContext } from "../context/selectedCampaignState";
import { EncountersContext } from "../context/encountersState";


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
        status: ""
    }) 

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
        })
    }

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
                <Form style={{"width": "23rem"}} onChange={handleChange} onSubmit={(e) => handleSubmit(e, newEncounter)}>
                    <Form.Group>
                        <Form.Label>Encounter Title:</Form.Label>
                        <Form.Control type="text" name="name" value={newEncounter.name} placeholder="Choose your encounter's title!" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" name="description" value={newEncounter.description} placeholder="A brief description of the encounter." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image:</Form.Label>
                        <Form.Control type="text" name="image" value={newEncounter.image} placeholder="Input image link." />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control type="text" name="notes" value={newEncounter.notes} placeholder="Any checks/things to note?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status:</Form.Label>
                        <Form.Control type="text" name="status" value={newEncounter.status} placeholder="Is this encounter active or in-active?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="submit" />
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
}

export default CreateEncounterPage;
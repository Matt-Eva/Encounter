import {Button, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"
import {EditEncounterContext} from "../context/editEncounterState";



function EncounterCard({id, name, handleDelete, status, image, encounter}){
    const {setSelectedEncounter} = useContext(SelectedEncounterContext)
    const {setEditEncounter} = useContext(EditEncounterContext)


    return(
        <Card style={{"height": "auto", "width": 300}}>
            <img src={image} alt="Image of the encounter" className="card-img-top"/>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Text>
                Status: {status}
            </Card.Text>
            <Row>
                <Col>
                    <Link to={`/encounter/${id}`}><Button onClick={() => setSelectedEncounter(encounter)}>View</Button></Link>
                    <Link to="/editencounter"><Button onClick={() => setEditEncounter(encounter)}>Edit</Button></Link>
                    <Button onClick={() => handleDelete(id)}>Delete</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default EncounterCard;
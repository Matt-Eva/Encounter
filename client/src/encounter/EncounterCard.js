import {Button, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"



function EncounterCard({id, name, handleDelete, status, image, encounter}){
    const {setSelectedEncounter} = useContext(SelectedEncounterContext)

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
                    <Link to="/editencounter"><Button>Edit</Button></Link>
                    <Button onClick={() => handleDelete(id)}>Delete</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default EncounterCard;
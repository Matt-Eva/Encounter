import {Button, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"



function EncounterCard({id, name, description, notes, status, image}){

    
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
                    <Link to={`/encounters/${id}`}><Button>View</Button></Link>
                    <Button>Edit</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default EncounterCard;
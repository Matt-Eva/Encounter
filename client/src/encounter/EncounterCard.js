import {Button, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"
import {EditEncounterContext} from "../context/editEncounterState";
import { EncountersContext } from "../context/encountersState";
import cardBackground from "../assets/cardBackground.jpg"

const cardStyle = {
    backgroundImage: `url(${cardBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: "300px",
    height: "500px", 
    padding: "10px"
}

const buttonStyle = { 
    margin: "5px"
}

function EncounterCard({id, name, handleDelete, status, image, encounter}){
    const {encounters, setEncounters} = useContext(EncountersContext)
    const {setSelectedEncounter} = useContext(SelectedEncounterContext)
    const {setEditEncounter} = useContext(EditEncounterContext)


    function toggleStatus(){
        let newStatus;
        if (encounter.status === "archived"){
            newStatus={
                status: "active"
            }
        } else if(encounter.status ==="active"){
            newStatus={
                status: "archived"
            }
        }
        const configObj ={
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newStatus)
        }
        fetch(`/encs/${encounter.id}`, configObj)
        .then(r => r.json())
        .then(data =>{
            console.log(data)
            const updEncounters = encounters.map(oldEncounter =>{
                if (oldEncounter.id === data.id){
                    return data
                } else{
                    return oldEncounter
                }
            })
            setEncounters([...updEncounters])
        })

    }


    return(
        <Card style={cardStyle} className="border border-dark">
            <img src={image} alt="Image of the encounter" style={{"maxHeight": "300px"}} className="card-img-top"/>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Text>
                Status: {status}
            </Card.Text>
            <Row>
                <Col>
                    <Link to={`/encounter/${id}`}><Button style={buttonStyle} variant="danger" onClick={() => setSelectedEncounter(encounter)}>View</Button></Link>
                    <Link to="/editencounter"><Button style={buttonStyle} variant="danger" onClick={() => setEditEncounter(encounter)}>Edit</Button></Link>
                    {status === "active"? <Button style={buttonStyle} variant="danger" onClick={toggleStatus}>Archive</Button> : <Button style={buttonStyle} variant="danger" onClick={toggleStatus}>Reactivate</Button>}
                    <Button style={buttonStyle} variant="danger" onClick={() => handleDelete(id)}>Delete</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default EncounterCard;
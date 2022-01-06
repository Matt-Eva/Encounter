import {Button, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"
import {EditEncounterContext} from "../context/editEncounterState";
import { EncountersContext } from "../context/encountersState";




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
                    {status === "active"? <Button onClick={toggleStatus}>Archive</Button> : <Button onClick={toggleStatus}>Reactivate</Button>}
                    <Button onClick={() => handleDelete(id)}>Delete</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default EncounterCard;
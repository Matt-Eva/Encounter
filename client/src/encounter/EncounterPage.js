import {Button, Card, Row, Col, Container} from "react-bootstrap";
import LogoutButton from "../userAuth/LogoutButton";
import {useContext, useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"
import HomePageButton from "../home/HomePageButton";


function EncounterPage(){
    const [display, setDisplay] = useState("description")
    const{selectedEncounter, setSelectedEncounter} = useContext(SelectedEncounterContext)
    const encounter = useParams()


    useEffect(() => {
        fetch(`/encs/${encounter.id}`)
        .then(r => r.json())
        .then(data => {
            setSelectedEncounter(data)
        })
    }, [])

    console.log("selencName:", selectedEncounter.name)
    if(selectedEncounter.length === 0){
        return <h1>Loading...</h1>
    }

    return(
        <Container>
            <Row>
                <Col>
                    <HomePageButton />
                </Col>
                <Col>
                    <h1>{selectedEncounter.campaign.name}</h1>
                    {/* {campaign ? <h1>{campaign}</h1> : null} */}
                </Col>
                <Col>
                    <LogoutButton />
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Description | </span>
                    <span>NPCs | </span>
                    <span>Monsters | </span>
                    <span>Items | </span>
                    <span>Location</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{selectedEncounter.name}</h2>
                    <p>Location: {selectedEncounter.location ? <p>{selectedEncounter.location.name}</p> : null}</p>
                    <p>{selectedEncounter.description}</p>
                </Col>
                <Col>
                    <img src={selectedEncounter.image}/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Notes</h2>
                    <p>{selectedEncounter.notes}</p>
                </Col>
                <Col md={6}>
                    <h2>Inventory</h2>
                    {selectedEncounter.items ? null : <p>Create some items for your encounter and add them here!</p>}
                    {/* Item Cards when Created */}
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Npcs</h2>
                    {selectedEncounter.npcs ? null : <p>Create some NPCs for your encounter and add them here!</p>}
                    {/* npc name cards when created */}
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the npc card in detail</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Monsters</h2>
                    {selectedEncounter.monsters ? null : <p>Create some monsters for your encounter and add them here!</p>}
                    {/* monster cards when created */}
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the monster card in detail</p>
                </Col>
            </Row>
        </Container>

    );
}

export default EncounterPage;
import {Button, Card, Row, Col, Container} from "react-bootstrap";
import LogoutButton from "../userAuth/LogoutButton";
import {useContext, useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"
import HomePageButton from "../home/HomePageButton";
import EncounterNpcPage from "../npc/EncounterNpcPage";


function EncounterPage(){
    const [display, setDisplay] = useState("description")
    const{selectedEncounter, setSelectedEncounter} = useContext(SelectedEncounterContext)
    const encounter = useParams()
    
    const npcs = selectedEncounter.npcs?.map(npc => <div>
        <h4>{npc.name}</h4>
        <img src={npc.image} style={{"max-width" : "200px"}}/>
        <p>{npc.description}</p>
        </div>)

    const monsters = selectedEncounter.monsters?.map(monster => <div>
        <h4>{monster.name}</h4>
        <img src={monster.image} style={{"max-width" : "200px"}}/>
        <p>{monster.description}</p>
        </div>)
    


    useEffect(() => {
        fetch(`/encs/${encounter.id}`)
        .then(r => r.json())
        .then(data => {
            setSelectedEncounter(data)
            console.log(selectedEncounter.npcs)
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
            {/* <Row>
                <Col>
                    <span>Description | </span>
                    <span>NPCs | </span>
                    <span>Monsters | </span>
                    <span>Items | </span>
                    <span>Location</span>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <h2>{selectedEncounter.name}</h2>
                    <p>Location: {selectedEncounter.location ? <p>{selectedEncounter.location.name}</p> : <p>No location specified</p>}</p>
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
                    <Link to="/createencounteritem"><Button>Create a New Item!</Button></Link>
                    {/* Item Cards when Created */}
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Npcs</h2>
                    {selectedEncounter.npcs ? null : <p>Create some NPCs for your encounter and add them here!</p>}
                    <Link to="/createencounternpc"><Button>Create a New NPC!</Button></Link>
                    {npcs}
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the npc card in detail</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Monsters</h2>
                    {selectedEncounter.monsters ? null : <p>Create some monsters for your encounter and add them here!</p>}
                    <Link to="/createencountermonster"><Button>Create a New Monster!</Button></Link>
                    {monsters}
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the monster card in detail</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Location</h2>
                    {selectedEncounter.location ? null : <div><p>Create a location for your encounter and add it!</p>
                        <Link to="/createencounterlocation"><Button>Create a New Location!</Button></Link>
                    </div>}
                    {/* monster cards when created */}
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the location card in detail</p>
                </Col>
            </Row>
        </Container>

    );
}

export default EncounterPage;
import {Button, Card, Row, Col, Container} from "react-bootstrap";
import LogoutButton from "../userAuth/LogoutButton";
import {useContext, useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"
import Icon from "../home/Icon";
import paperBackground from '../assets/paperBackground.jpg'

const backgroundImageStyle = {
    backgroundImage: `url(${paperBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh"
}


function EncounterPage(){
    const [display, setDisplay] = useState("description")
    const{selectedEncounter, setSelectedEncounter} = useContext(SelectedEncounterContext)
    const encounter = useParams()
    
    const npcs = selectedEncounter.npcs?.map(npc => <div>
        <h4>{npc.name}</h4>
        <img src={npc.image} style={{"maxWidth" : "200px"}}/>
        <p>{npc.description}</p>
        </div>)

    const monsters = selectedEncounter.monsters?.map(monster => <div>
        <h4>{monster.name}</h4>
        <img src={monster.image} style={{"maxWidth" : "200px"}}/>
        <p>{monster.description}</p>
        </div>)

    const items = selectedEncounter.items?.map(item => <div>
        <h4>{item.name}</h4>
        <img src={item.image} style={{"maxWidth" : "200px"}}/>
        <p>{item.description}</p>
        </div>)

    useEffect(() => {
        fetch(`/encs/${encounter.id}`)
        .then(r => r.json())
        .then(data => {
            setSelectedEncounter(data)
            console.log("selectedEnc:", data)
        })
    }, [])

    if(selectedEncounter.length === 0){
        return <h1>Loading...</h1>
    }

    return(
        <Container className="mw-100" style={backgroundImageStyle}>
            <Row>
                <Col>
                    <Icon/>
                </Col>
                <Col>
                    <Link to={`/campaign/${selectedEncounter.campaign.id}`} style={{"color": "black", "text-decoration": "none"}}><h1>{selectedEncounter.campaign.name}</h1></Link>
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
                    <h6>Location: {selectedEncounter.location ? <p>{selectedEncounter.location.name}</p> : <p>No location specified</p>}</h6>
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
                    {selectedEncounter.items.length !== 0 ? items : <p>Create some items for your encounter and add them here!</p>}
                    <Link to="/createencounteritem"><Button>Create a New Item!</Button></Link>
                    {/* Item Cards when Created */}
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Npcs</h2>
                    {selectedEncounter.npcs.length !== 0 ? npcs : <p>Create some NPCs for your encounter and add them here!</p>}
                    <Link to="/createencounternpc"><Button>Create a New NPC!</Button></Link>
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the npc card in detail</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Monsters</h2>
                    {selectedEncounter.monsters.length !== 0 ? monsters : <p>Create some monsters for your encounter and add them here!</p>}
                    <Link to="/createencountermonster"><Button>Create a New Monster!</Button></Link>
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the monster card in detail</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Location</h2>
                    {selectedEncounter.location ? <div>
                        <h4>{selectedEncounter.location.name}</h4>
                        <img src={selectedEncounter.location.image} style={{"maxWidth" : "200px"}}/>
                        <p>{selectedEncounter.location.description}</p>
                        </div> : <div><p>Create a location for your encounter and add it!</p>
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
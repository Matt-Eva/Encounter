import {Button, Card, Row, Col, Container, ListGroup, ListGroupItem} from "react-bootstrap";
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
    const [selectedNpc, setSelectedNpc] = useState(null)
    const [selectedMonster, setSelectedMonster] = useState(null)
    const{selectedEncounter, setSelectedEncounter} = useContext(SelectedEncounterContext)
    const encounter = useParams()

    const npcs = selectedEncounter.npcs?.map(npc =>{
        return <h2 onClick={() => setSelectedNpc(npc)}>{npc.name}</h2>
    })

    const monsters = selectedEncounter.monsters?.map(monster =>{
        return <h2 onClick={() => setSelectedMonster(monster)}>{monster.name}</h2>
    })

    let displayNpc = null;
    if (selectedNpc !== null){
        displayNpc = <div overflow="scroll">
            <h2>{selectedNpc.name}</h2>
            <img src={selectedNpc.image} style={{"maxWidth": "400px", "maxHeight": "600px"}}/>
            <p>{selectedNpc.description}</p>  
            </div>
    }

    let displayMonster = null;
    if (selectedMonster !== null){
        displayMonster = <div overflow="scroll">
            <h2>{selectedMonster.name}</h2>
            <img src={selectedMonster.image} style={{"maxWidth": "400px", "maxHeight": "600px"}}/>
            <p>{selectedMonster.description}</p>  
            </div>
    }
    
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
            if (data.npcs.length !== 0){
                setSelectedNpc(data.npcs[0])
            }
            if(data.monsters.length !== 0){
                setSelectedMonster(data.monsters[0])
            }
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
            <Row>
                <Col>
                    <h2>{selectedEncounter.name}</h2>
                    <h6>Location: {selectedEncounter.location ? <p>{selectedEncounter.location.name}</p> : <p>No location specified</p>}</h6>
                    <p>{selectedEncounter.description}</p>
                </Col>
                <Col>
                    <img src={selectedEncounter.image} style={{"maxWidth": "500px"}}/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Notes</h2>
                    <p>{selectedEncounter.notes}</p>
                </Col>
            </Row>
            <Row>    
                <Col md={6}>
                    <h2>Inventory</h2>
                    {selectedEncounter.items.length !== 0 ? items : <p>Create some items for your encounter and add them here!</p>}
                    <Link to="/createencounteritem"><Button>Create a New Item!</Button></Link>
                    {/* Item Cards when Created */}
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <h2>Npcs <Link to="/createencounternpc"><Button variant="danger">Create a New NPC!</Button></Link></h2>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%"}} className="border border-dark overflow-auto">
                    {selectedEncounter.npcs.length !== 0 ? <ul>{npcs}</ul> : <p>Create some NPCs for your encounter and add them here!</p>}
                    </Container>
                </Col>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%"}} className="border border-dark overflow-auto">
                        {displayNpc !== null ? displayNpc : <p>Once you have created/added an Npc, you can click on their name to the left and see their details!</p>}
                    </Container>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <h2>Monsters <Link to="/createencountermonster"><Button variant="danger">Create a New Monster!</Button></Link></h2>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%"}} className="border border-dark overflow-auto">
                        {selectedEncounter.monsters.length !== 0 ? <ul>{monsters}</ul> : <p>Create some monsters for your encounter and add them here!</p>}
                    </Container>
               </Col>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%"}} className="border border-dark overflow-auto">
                        {displayMonster !== null ? displayMonster : <p>Once you have created/added an Monster, you can click on their name to the left and see their details!</p>}
                    </Container>
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
                </Col>
                <Col md={6}>
                    <p>Interactive window that displays the location card in detail</p>
                </Col>
            </Row>
        </Container>

    );
}

export default EncounterPage;
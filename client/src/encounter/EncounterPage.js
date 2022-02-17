import {Button, Card, Row, Col, Container, ListGroup, ListGroupItem} from "react-bootstrap";
import LogoutButton from "../userAuth/LogoutButton";
import {useContext, useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import {SelectedEncounterContext} from "../context/selectedEncounterState.js"
import Icon from "../home/Icon";
import parchmentBackground from '../assets/parchmentBackground.jpg'
import cardBackground from '../assets/cardBackground.jpg'


const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'fixed',
    minHeight: "100%",
    position: "absolute"
}

function EncounterPage(){
    const [selectedNpc, setSelectedNpc] = useState(null)
    const [selectedMonster, setSelectedMonster] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    const{selectedEncounter, setSelectedEncounter} = useContext(SelectedEncounterContext)
    const encounter = useParams()

    const npcs = selectedEncounter.npcs?.map(npc =>{
        return <h2 style={{"cursor": "pointer"}} onClick={() => setSelectedNpc(npc)}>{npc.name}</h2>
    })

    const monsters = selectedEncounter.monsters?.map(monster =>{
        return <h2 style={{"cursor": "pointer"}} onClick={() => setSelectedMonster(monster)}>{monster.name}</h2>
    })

    const items = selectedEncounter.items?.map(item =>{
        return <h2 style={{"cursor": "pointer"}} onClick={() => setSelectedItem(item)}>{item.name}</h2>
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

    let displayItem = null;
    if (selectedItem !== null){
        displayItem = <div overflow="scroll">
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.image} style={{"maxWidth": "400px", "maxHeight": "600px"}}/>
            <p>{selectedItem.description}</p>  
            </div>
    }

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
            if(data.items.length !== 0){
                setSelectedItem(data.items[0])
            }
        })
    }, [])

    if(selectedEncounter.length === 0){
        return <h1>Loading...</h1>
    }

    return(
        <Container className="mw-100" style={backgroundImageStyle}>
            <Row style={{"margin" : "10px"}}>
                <Col style={{"text-align" : "left"}} className="border-bottom border-dark">
                    <Icon/>
                </Col>
                <Col xs={6} style={{"text-align" : "center"}} className="border-bottom border-dark">
                    <Link to={`/campaign/${selectedEncounter.campaign.id}`} style={{"color": "black", "text-decoration": "none"}}><h1>{selectedEncounter.campaign.name}:</h1></Link>
                    <h2>{selectedEncounter.name}</h2>
                </Col>
                <Col style={{"text-align" : "right"}} className="border-bottom border-dark">
                    <LogoutButton />
                </Col>
            </Row>
            <Row style={{"margin" : "10px"}}>
                <Col>
                    <Container style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                    <h2>{selectedEncounter.name}</h2>
                    {selectedEncounter.location ? <p>Location: {selectedEncounter.location.name}</p> :<h6>Location: No location specified.</h6>}
                    <p>{selectedEncounter.description}</p>
                    </Container>
                </Col>
                <Col style={{"text-align" : "right"}}>
                    <img src={selectedEncounter.image} style={{"maxWidth": "90%"}}/>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <h2>Notes</h2>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <Container style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }}>
                        <p style={{"fontSize": "26px"}} contenteditable='true'>{selectedEncounter.notes}</p>
                    </Container>
                </Col>
            </Row>
            {/* Break */}
            <Row style={{"margin": "10px"}}>
                <Col>
                    {selectedEncounter.location !== null ? <h2>Location</h2> : <h2>Location <Link to={`/createencounterlocation/${selectedEncounter.id}`}><Button variant="danger">Create an Encounter Location!</Button></Link></h2>}
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <Container style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                        <Col>
                        {selectedEncounter.location ? <div>
                            <h4>{selectedEncounter.location.name}</h4>
                            <img src={selectedEncounter.location.image} style={{"maxWidth" : "200px"}}/>
                            <p style={{"fontSize": "26px"}}>{selectedEncounter.location.description}</p>
                            </div> : <div><p style={{"fontSize": "26px"}}>Create a location for your encounter and add it!</p>
                        </div>}
                        </Col>
                    </Container>
                </Col> 
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <h2>Items <Link to={`/createencounteritem/${selectedEncounter.id}`}><Button variant="danger">Create a New Item!</Button></Link></h2>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                        {selectedEncounter.items.length !== 0 ? <ul>{items}</ul> : <p style={{"fontSize": "26px"}}>Create some Items for your encounter and add them here!</p>}
                    </Container>
                </Col>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                        {displayItem !== null ? displayItem : <p style={{"fontSize": "26px"}}>Once you have created/added an Item, you can click on their name to the left and see its details!</p>}
                    </Container>
                </Col>    
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <h2>Npcs <Link to={`/createencounternpc/${selectedEncounter.id}`}><Button variant="danger">Create a New NPC!</Button></Link></h2>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                    {selectedEncounter.npcs.length !== 0 ? <ul>{npcs}</ul> : <p style={{"fontSize": "26px"}}>Create some NPCs for your encounter and add them here!</p>}
                    </Container>
                </Col>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                        {displayNpc !== null ? displayNpc : <p style={{"fontSize": "26px"}}>Once you have created/added an Npc, you can click on their name to the left and see their details!</p>}
                    </Container>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <h2>Monsters <Link to={`/createencountermonster/${selectedEncounter.id}`}><Button variant="danger">Create a New Monster!</Button></Link></h2>
                </Col>
            </Row>
            <Row style={{"margin": "10px"}}>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                        {selectedEncounter.monsters.length !== 0 ? <ul>{monsters}</ul> : <p style={{"fontSize": "26px"}}>Create some monsters for your encounter and add them here!</p>}
                    </Container>
               </Col>
                <Col>
                    <Container md={6} style={{"padding": "5px", "height": "300px", "maxWidth": "100%", "backgroundSize" : "cover", "backgroundRepeat" : "no-repeat", "backgroundImage": `url(${cardBackground})` }} className="border border-dark shadow overflow-auto">
                        {displayMonster !== null ? displayMonster : <p style={{"fontSize": "26px"}}>Once you have created/added an Monster, you can click on their name to the left and see their details!</p>}
                    </Container>
                </Col>
            </Row>
        </Container>

    );
}

export default EncounterPage;
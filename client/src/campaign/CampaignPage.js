import LogoutButton from "../userAuth/LogoutButton";
import Icon from "../home/Icon";
import SearchBar from "../home/SearchBar";
import {Row, Container, Col, Button} from "react-bootstrap";
import {UserContext} from "../context/userState";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { SelectedCampaignContext } from "../context/selectedCampaignState";
import { EncountersContext } from "../context/encountersState";
import {useParams} from "react-router-dom"
import parchmentBackground from '../assets/parchmentBackground.jpg'
import EncounterDisplayContainer from "../encounter/EncounterDisplayContainer";
import Filter from "../home/Filter";

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh",
    padding: "30px"
}

function CampaignPage(){
    const {user} = useContext(UserContext)
    const {selectedCampaign, setSelectedCampaign} = useContext(SelectedCampaignContext)
    const {encounters, setEncounters} = useContext(EncountersContext)
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("all")
    const campaign = useParams()

    useEffect(() => {
        fetch(`/campaigns/${campaign.id}`)
        .then(r => r.json())
        .then(data => setSelectedCampaign(data))
    }, [])

    useEffect(() => {
        fetch(`/campaignencs/${selectedCampaign.id}`)
        .then(r => r.json())
        .then(data => {
            setEncounters(data)
        })
    },[selectedCampaign])

    function handleDelete(id){
        fetch(`/encs/${id}`, {method: "DELETE"})
        .then(() => {
            const newEncs = encounters.filter(enc => enc.id !== id)
            setEncounters([...newEncs])
        })
    }

    //Encounter card mapping
    const encountersToDisplay = encounters.filter(encounter => encounter.name.toLowerCase().includes(search.toLowerCase())).filter((encounter) => {
        if(selected === "all"){
            return true
        } else {
            return selected === encounter.status
        }
    })

    return(
        <Container className="mw-100" style={backgroundImageStyle}>
            <Row>
                <Col>
                    <Icon/>
                </Col>
                <Col>
                <h1>Campaign</h1>
                </Col>
                <Col>
                    <LogoutButton/>
                </Col> 
            </Row>
            <Row>
                <Col sm={4}>
                    <h2>{selectedCampaign.name}</h2>
                    <h5>{selectedCampaign.description}</h5>
                </Col>
                <Col>
                    <h5>Status: {selectedCampaign.status}</h5>
                </Col>
                <Col sm={6} >
                    <img src={selectedCampaign.image} alt="picture of campaign image" className="img-fluid" style={{"maxWidth": "500px"}}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchBar search={search} setSearch={setSearch}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Filter selected={selected} setSelected={setSelected}/>
                </Col>
            </Row>
            <Row>
                <Link to="/createencounter"><Button variant="danger">Create a New Encounter</Button></Link>
                <EncounterDisplayContainer handleDelete={handleDelete} encounters={encountersToDisplay}/>
            </Row>
        </Container>
    );
}

export default CampaignPage;
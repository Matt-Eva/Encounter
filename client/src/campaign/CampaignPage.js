import LogoutButton from "../userAuth/LogoutButton";
import EncounterCard from "../encounter/EncounterCard"
import Icon from "../home/Icon";
import {Row, Container, Col, Button} from "react-bootstrap";
import {UserContext} from "../context/userState";
import { useContext, useEffect } from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { SelectedCampaignContext } from "../context/selectedCampaignState";
import { EncountersContext } from "../context/encountersState";
import {useParams} from "react-router-dom"
import paperBackground from '../assets/paperBackground.jpg'


const backgroundImageStyle = {
    backgroundImage: `url(${paperBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}




function CampaignPage(){
    const {user} = useContext(UserContext)
    const {selectedCampaign, setSelectedCampaign} = useContext(SelectedCampaignContext)
    const {encounters, setEncounters} = useContext(EncountersContext)
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

    const encounterCards = encounters?.map(enc => <EncounterCard key={enc.id} id={enc.id} handleDelete={handleDelete} encounter={enc} name={enc.name} image={enc.image} status={enc.status}/>)


    return(
        <Container className="mw-100" style={backgroundImageStyle}>
            <Row>
                <Col>
                    <Icon/>
                </Col>
                <Col>
                   Encounter<br/>
                   Welcome {user.dm_name}
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
                    <img src={selectedCampaign.image} alt="picture of campaign image" className="img-fluid"/>
                </Col>
            </Row>
            <Row>
                <Link to="/createencounter"><Button>Create a New Encounter</Button></Link>
                {encounterCards}
            </Row>
        </Container>
    );
}

export default CampaignPage;
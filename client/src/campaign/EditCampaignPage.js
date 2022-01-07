import LogoutButton from "../userAuth/LogoutButton";
import EditCampaignForm from "./EditCampaignForm"
import { EditCampaignContext } from "../context/editCampaignState";
import Icon from "../home/Icon";
import {useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Row, Container, Col} from "react-bootstrap";
import parchmentBackground from "../assets/parchmentBackground.jpg"

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: "10px",
    minHeight: "100vh",
    minWidth: "100%"
}

function EditCampaignPage(){
    const {editCampaign, setEditCampaign} = useContext(EditCampaignContext)
    // const enc = useParams()

    // useEffect(() => {
    //     fetch(`/encs/${enc.id}`)
    //     .then(r => r.json())
    //     .then(data => setEditCampaign(data))
    // }, [])

    return(
        <Container style={backgroundImageStyle}>
            <Row>
                <Col>
                <Icon/>
                </Col>
                <Col>
                <h1>Edit {editCampaign.name}</h1>
                </Col>
                <Col style={{"textAlign": "right"}}>
                    <LogoutButton/>
                </Col>
            </Row>
            <Row>
                <EditCampaignForm editCampaign={editCampaign} setEditCampaign={setEditCampaign}/>
            </Row>
        </Container>
    );
}

export default EditCampaignPage;
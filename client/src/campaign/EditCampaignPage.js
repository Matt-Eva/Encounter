import LogoutButton from "../userAuth/LogoutButton";
import EditCampaignForm from "./EditCampaignForm"
import { EditCampaignContext } from "../context/editCampaignState";
import Icon from "../home/Icon";
import {useContext} from "react"
import {Link} from "react-router-dom";
import {Row, Container, Col} from "react-bootstrap";
import parchmentBackground from "../assets/parchmentBackground.jpg"

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh",
    minWidth: "100%"
}

function EditCampaignPage(){
    const {editCampaign} = useContext(EditCampaignContext)

    return(
        <Container style={backgroundImageStyle}>
            <Row>
                <Col>
                <Icon/>
                </Col>
                <Col>
                <h1>Edit {editCampaign.name}</h1>
                </Col>
                <Col>
                    <LogoutButton/>
                </Col>
            </Row>
            <Row>
                <EditCampaignForm campaign={editCampaign}/>
            </Row>
        </Container>
    );
}

export default EditCampaignPage;
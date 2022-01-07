import LogoutButton from "../userAuth/LogoutButton";
import CreateCampaignForm from "./CreateCampaignForm"
import {Link} from "react-router-dom";
import {Row, Container, Col} from "react-bootstrap";
import Icon from "../home/Icon";
import parchmentBackground from "../assets/parchmentBackground.jpg"

const backgroundImageStyle = {
    backgroundImage: `url(${parchmentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "100vh"
}

function CreateCampaignPage(){
    return(
        <Container style={backgroundImageStyle} className="mw-100">
            <Row>
                <Col>
                <Icon/>
                </Col>
                <Col>
                <h1>Create A New Campaign</h1>
                </Col>
                <Col>
                    <LogoutButton/>
                </Col>
            </Row>
            <Row>
                <CreateCampaignForm/>
            </Row>
        </Container>
    );
}

export default CreateCampaignPage;
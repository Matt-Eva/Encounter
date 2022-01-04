import LogoutButton from "../userAuth/LogoutButton";
import CreateCampaignForm from "./CreateCampaignForm"
import {Link} from "react-router-dom";
import {Row, Container, Col} from "react-bootstrap";

function CreateCampaignPage(){
    return(
        <Container>
            <Row>
                <Col>
                <button><Link to="/">HomePage</Link></button>
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
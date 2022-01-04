import LogoutButton from "../userAuth/LogoutButton";
import CampaignDisplayContainer from "../campaign/CampaignDisplayContainer";
import CampaignCard from "../campaign/CampaignCard";
import {Row, Container, Col} from "react-bootstrap"

function HomePage(){
    return(
        <Container>
            <Row>
                <Col>
                    Icon
                    Menu
                </Col>
                <Col>
                   Encounter
                </Col>
                <Col>
                    <LogoutButton/>
                </Col> 
            </Row>
        
        </Container>
    );
}

export default HomePage;